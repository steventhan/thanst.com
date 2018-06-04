import React, { Component } from "react";
import { CircularProgress, withStyles } from "@material-ui/core";
import axios from "axios";

import { secondary } from "../../theme";
import UnderlinedTitle from "../UnderlinedTitle";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 60,
  },
  progress: {
    color: secondary,
    justifySelf: "center"
  },
}

class ProjectDetail extends Component {
  state = {
    fetching: false,
    error: null,
  }
  componentDidMount() {
    this.setState({ fetching: true }, () => {
      axios.get(`/api/projects/${this.props.match.params.slug}`)
        .then(res => this.setState({ project: res.data, fetching: false }))
        .catch(err => this.setState({ error: err, fetching: false }))
    });
  }

  render() {
    const { fetching, error, project } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {fetching && (
          <CircularProgress className={classes.progress} />
        )}
        {project && (
          <div>
            <UnderlinedTitle text={project.metadata.title} />
            <div>{project.body}</div>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(ProjectDetail);
