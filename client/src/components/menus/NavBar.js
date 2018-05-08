import React, { Component } from "react";
import { AppBar, Button, Toolbar } from "material-ui";
import { withStyles } from "material-ui/styles";

const buttons = [
  {
    label: "about me",
    path: "/"
  },
  {
    label: "projects",
    path: "/projects"
  },
  {
    label: "resume",
    path: "/resume"
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
      <AppBar style={ styles.appbar }>
        <Toolbar style={ styles.toolbar }>
          { buttons.map((button, i) => {
             return <Button size="small" color="secondary" variant="raised">{ button.label }</Button>;
          })}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavBar);
