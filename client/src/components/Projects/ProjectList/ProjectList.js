import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, CircularProgress, Typography, withStyles } from "@material-ui/core";
import { Card, CardHeader, CardContent, CardActions } from "@material-ui/core";
import Masonry from "react-masonry-component";

import ProjectTags from "../ProjectTags";
import { secondary } from "../../../theme";

const styles = {
  root: {},
  project: {
    padding: "0.5%",
  },
  progress: {
    color: secondary,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 5
  },
  error: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 10
  }
};


class ProjectList extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  shouldComponentUpdate = nextProps => {
    return !nextProps.projectListState.waiting;
  }

  handleTryAgain = () => this.props.fetchProjects()

  render() {
    const { projects, projectListState, classes, location } = this.props;
    const options = {
      itemSelector: `.${classes.project}`,
      transitionDuration: "0.2s",
      percentPosition: true,

    };
    const defaultThumbnail = "http://via.placeholder.com/350x250";

    return (
      <Fragment>
        {projectListState.fetching && projects.length === 0 && (
          <div className={classes.progress}>
            <CircularProgress size={50} />
          </div>
        )}
        {!projectListState.fetching && projectListState.error && (
          <div className={classes.error}>
            <i>Unable to load data</i>
          </div>
        )}
        {projectListState.error && (
          <div className={classes.error}>
            <Button onClick={this.handleTryAgain} variant="raised" color="secondary">Try again</Button>
          </div>
        )}
        {projects.length === 0 && !projectListState.fetching && !projectListState.error &&
          <div><p align="center"><i>No project found</i></p></div>}
        <Masonry options={options} >
          {projects.map(project => (
            <div style={{ width: this.props.projectWidth }} className={classes.project} key={project.slug}>
              <Card>
                <Link to={`${location.pathname}/${project.slug}`}>
                  <CardHeader
                    title={project.metadata.title}
                    subheader={`${project.metadata.start} - ${project.metadata.end}`}
                  />
                  <img width="100%" alt="" src={project.metadata.thumbnail ? project.metadata.thumbnail : defaultThumbnail} />
                </Link>
                <CardContent>
                  <Typography component="p">
                    {project.metadata.intro}
                  </Typography>
                </CardContent>
                <CardActions>
                  <ProjectTags tags={project.metadata.tags} />
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
