import React, { Component } from "react";
import { CircularProgress, withStyles } from "@material-ui/core";
import axios from "axios";

import UnderlinedTitle from "../UnderlinedTitle";
import Metadata from "./Metadata";
import Markdown from "./Markdown";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 60,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    width: "93%",
    maxWidth: 1000,
  },
  progress: {
    marginTop: 20
  },
  detail: {
  },
};

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
    const { fetching, project } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {fetching && (
          <div className={classes.progress}>
            <CircularProgress />
          </div>
        )}
        {project && (
          <div className={classes.section}>
            <UnderlinedTitle style={{ paddingBottom: 20 }} text={project.metadata.title} />
            <Metadata metadata={project.metadata} />
            <Markdown raw={project.body} />
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(ProjectDetail);
