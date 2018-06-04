import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";

import SearchBox from "./SearchBox";
import ProjectList from "./ProjectList";
import UnderlinedTitle from "../UnderlinedTitle";


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
          <UnderlinedTitle text="Projects" />
          <SearchBox />
          <ProjectList />
        </div>
      </Scrollbars>
    );
  }
}


export default withStyles(styles)(Projects);
