import React, { Component } from "react";
import { Avatar, CircularProgress, withStyles } from "@material-ui/core";

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
  },
  progress: {
    color: secondary
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 250,
    border: `5px solid ${secondary}`,
    borderRadius: "50%",
  },
  avatar: {
    width: "100%",
    height: "auto",
  }
}

class AboutMe extends Component {
  state = {
    loading: true
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <CircularProgress
            style={!this.state.loading ? { display: "none" } : {}}
            className={classes.progress}
          />
          <Avatar
            style={this.state.loading ? { display: "none" } : {}}
            className={classes.avatar}
            alt="avatar"
            src={avatar}
            imgProps={{
              onLoad: () => this.setState({ loading: false })
            }}
          />
        </div>
        <ContactOptions />
      </div>
    );
  }
}

export default withStyles(styles)(AboutMe);
