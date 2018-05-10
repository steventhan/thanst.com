import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Avatar, withStyles, Grid, Typography, TextField } from "material-ui";

import SearchBoxContainer from "../containers/SearchBoxContainer";
import ProjectListContainer from "../containers/ProjectListContainer";
import projects from "../fake-data";
import avatar from "../avatar.jpg";


const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    paddingTop: 60,
  },
  section: {
    paddingLeft: 20,
    paddingRight: 20,
  }
}


class Projects extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid className={classes.section} container spacing={0} justify="center" >
          <Grid item xs={12} >
            <Typography align="center" variant="title">Projects</Typography>
          </Grid>
        </Grid>
        <Grid className={classes.section} container spacing={0} justify="flex-end">
          <Grid item xs={12} md={4} lg={2}>
            <SearchBoxContainer />
          </Grid>
        </Grid>
        <Grid className={classes.section} container spacing={0} >
          <Grid item xs={12} >
            <ProjectListContainer />
          </Grid>
        </Grid>
      </div>
    );
  }
}


export default withStyles(styles)(Projects);
