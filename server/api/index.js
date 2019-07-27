const api = require("express").Router();
const { GraphQLClient } = require("graphql-request");

const github = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_KEY}`,
  },
});


const fetchAllProjects = () => {
  return new Promise((resolve, reject) => {
    const QUERY = `
      query {
        repository(name: "thanst.com-projects", owner: "steventhan") {
          object(expression: "master:") {
            ... on Tree {
              entries {
                slug: name
                type
                object {
                  ... on Tree {
                    files: entries {
                      name
                      object {
                        ... on Blob {
                          content: text
                          oid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;
    github.request(QUERY)
      .then(result => {
        let entries = result["repository"]["object"]["entries"];
        let folders = entries.filter(entry => entry.type === "tree")
        folders.forEach(folder => {
          folder["object"]["files"].forEach(file => {
            if (file.name === "metadata.json") {
              folder["metadata"] = JSON.parse(file["object"]["content"]);
            } else if (file.name === "body.md") {
              folder["body"] = file["object"]["content"];
            }
          });
          folder["object"] = undefined;
          folder["type"] = undefined;
        });

        resolve(folders);
      })
      .catch(err => reject(err));
  });
};

api.get("/projects", (req, res) => {
  fetchAllProjects()
    .then(projects => {
      projects.sort((a, b) => {
        return new Date(b.metadata.start) - new Date(a.metadata.start);
      });
      res.send(projects);
    })
    .catch(err => console.log(err) || res.sendStatus(500));
});

api.get("/projects/:slug", (req, res) => {
  fetchAllProjects()
    .then(projects => {
      const matched = projects.filter(project => project.slug === req.params.slug);
      if (matched.length === 1) return res.send(matched[0]);
      return res.sendStatus(404);
    })
    .catch(err => console.log(err) || res.send(err));
});

module.exports = api;
