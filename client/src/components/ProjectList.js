import React, { Component } from "react";
import { Chip, Paper, Typography, withStyles } from "material-ui";
import Card, { CardHeader, CardMedia, CardContent, CardActions } from "material-ui/Card";
import Masonry from "react-masonry-component";

import ProjectTags from "./ProjectTags";

const styles = {
  root: {},
  project: {
    width: "100%",
    padding: "0.5%",
    "@media (min-width: 550px)": {
      width: "50%",
    },
    "@media (min-width: 900px)": {
      width: "33.33%",
    },
    "@media (min-width: 1200px)": {
      width: "25%",
    },
  },
};

const ProjectList = ({ projects, classes }) => {
  const options = {
    percentPosition: true,
    itemSelector: `.${classes.project}`,
    columnWidth: `.${classes.project}`,
  }

  return (
    <Masonry className={classes.root} options={options} >
      {projects.map(project => (
        <div className={classes.project} key={project.id}>
          <Card>
            <CardHeader
              title={project.title}
              subheader="September 14, 2016"
            />
            <img width="100%" alt="" src="http://via.placeholder.com/350x250" />
            <CardContent>
              <Typography component="p">
                {project.intro}
              </Typography>
            </CardContent>
            <CardActions>
              <ProjectTags tags={project.tags} />
            </CardActions>
          </Card>
        </div>
      )
      )}
    </Masonry>
  )
}

export default withStyles(styles)(ProjectList);
