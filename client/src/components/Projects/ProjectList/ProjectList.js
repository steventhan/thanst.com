import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Typography, withStyles } from "@material-ui/core";
import { Card, CardHeader, CardContent, CardActions } from "@material-ui/core";
import Masonry from "react-masonry-component";

import ProjectTags from "../ProjectTags";

const styles = {
  root: {},
  project: {
    padding: "0.5%",
  },
};


class ProjectList extends Component {
  shouldComponentUpdate = nextProps => {
    return !nextProps.projectListState.waiting;
  }

  render() {
    const { projects, classes, location } = this.props;
    const options = {
      itemSelector: `.${classes.project}`,
      transitionDuration: "0.2s",
      percentPosition: true,

    }

    return (
      <Fragment>
        {projects.length === 0 && <div><p align="center"><i>No project found</i></p></div>}
        <Masonry options={options} >
          {projects.map(project => (
            <div style={{ width: this.props.projectWidth }} className={classes.project} key={project.id}>
              <Card>
                <Link to={`${location.pathname}/${project.slug}`}>
                  <CardHeader
                    title={project.title}
                    subheader="September 14, 2016"
                  />
                  <img width="100%" alt="" src="http://via.placeholder.com/350x250" />
                </Link>
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
          ))}
        </Masonry>
      </Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(ProjectList));
