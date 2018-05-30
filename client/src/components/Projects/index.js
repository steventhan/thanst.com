import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Avatar, withStyles, Grid, Typography, TextField } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";

import SearchBox from "./SearchBox";
import ProjectList from "./ProjectList";
import projects from "../../fake-data";
import avatar from "../../avatar.jpg";


const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 60,
    paddingLeft: 10,
    paddingRight: 10,
  },
}


class Projects extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Scrollbars style={{minHeight: "100vh"}}>
        <div className={classes.root}>
          <Typography align="center" variant="title">Projects</Typography>
          <SearchBox />
          <ProjectList />
        </div>
      </Scrollbars>
    );
  }
}


export default withStyles(styles)(Projects);
