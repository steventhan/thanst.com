import React, { Component } from "react";
import { Avatar, withStyles } from "@material-ui/core";

import { secondary } from "../theme";
import ContactOptions from "./ContactOptions";
import avatar from "../avatar.jpg";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 70,
  },
  wrapper: {
    maxWidth: 250,
    maxHeight: 250,
    border: `5px solid ${secondary}`,
    borderRadius: "50%",
  },
  avatar: {
    // width: "50%",
    width: "100%",
    height: "auto",
  }
}

const AboutMe = ({ classes }) =>  {
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Avatar className={classes.avatar} alt="avatar" src={avatar}/>
      </div>
      <ContactOptions />
    </div>
  );
}

export default withStyles(styles)(AboutMe);
