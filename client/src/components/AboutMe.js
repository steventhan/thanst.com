import React, { Component } from "react";
import { Avatar, withStyles } from "material-ui";

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
    paddingBottom: "10%",
  },
  avatar: {
    width: "50%",
    height: "50vw",
    maxWidth: 250,
    maxHeight: 250
  }
}

const AboutMe = ({ classes }) =>  {
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar} alt="avatar" src={avatar}/>
      <ContactOptions />
    </div>
  );
}

export default withStyles(styles)(AboutMe);
