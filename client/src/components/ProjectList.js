import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import { connect } from "react-redux";
import { Chip, Paper, Typography, withStyles } from "@material-ui/core";
import Card, { CardHeader, CardMedia, CardContent, CardActions } from "material-ui/Card";
import Masonry from "react-masonry-component";
import $ from "jquery";

import ProjectTagsContainer from "../containers/ProjectTagsContainer";

const styles = {
  root: {},
  project: {
    padding: "0.5%",
  },
};

const mapStateToProps = store => ({ splitPane: store.splitPane })

class ProjectList extends Component {
  getProjectWidth() {
    const { splitPane } = this.props;
    const containerWidth = splitPane.open ? splitPane.size : $(window).width();
    let projectWidth;

    if (containerWidth > 1200) {
      projectWidth = "25%";
    } else if (containerWidth > 900) {
      projectWidth = "33.33%";
    } else if (containerWidth > 550) {
      projectWidth = "50%";
    } else projectWidth = "100%";

    return projectWidth;
  }

  render() {
    const { projects, classes } = this.props;
    const options = {
      percentPosition: true,
      itemSelector: `.${classes.project}`,
    }
    console.log(options.itemSelector);

    return (
      <Masonry options={options} >
        {projects.map(project => (
          <div style={{ width: this.getProjectWidth() }} className={classes.project} key={project.id}>
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
        )
        )}
      </Masonry>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(ProjectList));
