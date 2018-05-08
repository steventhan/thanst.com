import React, { Component } from "react";
import { Avatar, withStyles } from "material-ui";

import ContactOptions from "./ContactOptions";
import avatar from "../avatar.jpg";


const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
}

class Projects extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={ classes.root }>
      </div>
    );
  }
}


export default withStyles(styles)(Projects);
