import React, { Component } from "react";
import { Chip, withStyles } from "material-ui";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  tag: {
    margin: 2 
  }
}

const ProjectTags = ({ tags, classes }) => {
  return (
    <div className={classes.root}>
      {tags.map(tag => <Chip className={classes.tag} key={tag} label={tag} />)}
    </div>
  );
}

export default withStyles(styles)(ProjectTags);
