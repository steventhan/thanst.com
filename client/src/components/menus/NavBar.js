import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";


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
    backgroundColor: "transparent",
  },
  toolbar: {
    justifyContent: "space-between"
  }
}

class NavBar extends Component {
  render() {
    const url = this.props.location.pathname
    return (
      <AppBar style={styles.appbar}>
        <Toolbar style={styles.toolbar}>
          <div>
            {/\/projects\/[a-z-]+/.test(url) && (
              <Button
                color="secondary"
                size="small"
                component={Link}
                to="/projects"
                variant="outlined"
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
                color="secondary"
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

export default withRouter(NavBar);
