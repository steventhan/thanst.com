import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import { connect } from "react-redux";
import { Chip, Paper, Typography, withStyles } from "@material-ui/core";
import { Card, CardHeader, CardMedia, CardContent, CardActions } from "@material-ui/core";
import Masonry from "react-masonry-component";
import { Scrollbars } from "react-custom-scrollbars";
import $ from "jquery";

import { resetTransition } from "../actions/splitPaneActions";
import ProjectTagsContainer from "../containers/ProjectTagsContainer";

const styles = {
  root: {},
  project: {
    padding: "0.5%",
  },
};


class ProjectList extends Component {
  shouldComponentUpdate = nextProps => {
    console.log("here");
    const { projectListState } = nextProps;
    if (!projectListState.waiting) {
      return true;
    }
    return false;
  }

  componentWIllUpdate = () => {
    this.props.onFinishUpdate();
  }

  render() {
    const { projects, classes } = this.props;
    const options = {
      itemSelector: `.${classes.project}`,
      transitionDuration: "0.2s",
      percentPosition: true,

    }

    return (
      <Masonry options={options} >
        {projects.map(project => (
          <div style={{ width: this.props.projectWidth }} className={classes.project} key={project.id}>
            <Card onClick={() => alert("hi")}>
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
                <ProjectTagsContainer tags={project.tags} />
              </CardActions>
            </Card>
          </div>
        ))}
      </Masonry>
    );
  }
}

export default withStyles(styles)(ProjectList);
