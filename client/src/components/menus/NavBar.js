import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { AppBar, Button, Toolbar, withStyles } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";


const buttons = [
  {
    label: "home",
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
    backgroundColor: "transparent",
  },
  toolbar: {
    justifyContent: "space-between"
  },
  buttonLabel: {
    marginLeft: -12
  }
}

class NavBar extends Component {
  render() {
    const url = this.props.location.pathname;
    return (
      <AppBar style={styles.appbar}>
        <Toolbar style={styles.toolbar}>
          <div>
            {/\/projects\/[a-z-]+/.test(url) && (
              <Button
                classes={{
                  label: this.props.classes.buttonLabel
                }}
                color="primary"
                size="small"
                component={Link}
                to="/projects"
              >
                <KeyboardArrowLeft /> Back
              </Button>
            )}
          </div>
          <div>
            {buttons.map((button, i) => (
              <Button
                key={i}
                exact={button.label !== "projects"}
                activeStyle={{ backgroundColor: "rgb(70, 89, 117)" }}
                component={NavLink}
                to={button.path}
                size="small"
                color="primary"
                variant="raised"
              >
                {button.label}
              </Button>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(withRouter(NavBar));
