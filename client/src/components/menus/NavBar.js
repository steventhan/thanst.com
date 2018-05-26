import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const buttons = [
  {
    label: "about me",
    path: "/"
  },
  {
    label: "projects",
    path: "/projects"
  },
]

const styles = {
  appbar: {
    boxShadow: "none",
    backgroundColor: "transparent"
  },
  toolbar: {
    justifyContent: "flex-end"
  }
}

class NavBar extends Component {
  render() {
    const classes = this.props;
    return (
      <AppBar style={styles.appbar}>
        <Toolbar style={styles.toolbar}>
          {buttons.map((button, i) => (
              <Button
                key={i}
                component={NavLink}
                to={button.path}
                size="small"
                color="secondary"
                variant="raised"
              >
                {button.label}
              </Button>
            )
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavBar);
