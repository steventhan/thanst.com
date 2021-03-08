import { NowRequest, NowResponse } from "@vercel/node";
import { GraphQLClient, gql } from "graphql-request";

const GH_GRAPHQL_CLIENT = new GraphQLClient("https://api.github.com/graphql", {
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
});

const QUERY = gql`
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

const fetchAllProjects = async () => {
  const result = await GH_GRAPHQL_CLIENT.request(QUERY);
  let entries = result["repository"]["object"]["entries"];
  let folders = entries.filter((entry) => entry.type === "tree");
  folders.forEach((folder) => {
    folder["object"]["files"].forEach((file) => {
      if (file.name === "metadata.json") {
        folder["metadata"] = JSON.parse(file["object"]["content"]);
      } else if (file.name === "body.md") {
        folder["body"] = file["object"]["content"];
      }
    });
    folder["object"] = undefined;
    folder["type"] = undefined;
  });
  return folders;
};

export default async (_req: NowRequest, res: NowResponse) => {
  const projects = await fetchAllProjects();
  res.send(
    projects.sort(
      (a, b) =>
        new Date(b.metadata.start).getTime() -
        new Date(a.metadata.start).getTime()
    )
  );
};

export { fetchAllProjects };
