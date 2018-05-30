import React from "react";
import { Chip, withStyles } from "@material-ui/core";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  tag: {
    margin: 2
  }
}

const ProjectTags = ({ tags, classes, onClick }) => {
  return (
    <div className={classes.root}>
      {tags.map(tag => (
        <Chip
          className={classes.tag}
          key={tag}
          label={tag}
          onClick={event => onClick(event, tag)}
        />
      )
      )}
    </div>
  );
}

export default withStyles(styles)(ProjectTags);
