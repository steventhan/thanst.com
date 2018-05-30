import React, { Component } from "react";
import { connect } from "react-redux";
import { togglePane } from "../../actions/splitPaneActions";
import { startWaiting } from "../../actions/projectListActions";
import { withStyles, Button } from "@material-ui/core";

import resumeIcon from "../../resume-icon.png";

const styles = {
  root: {
    position: "fixed",
    bottom: 20,
    right: 30,
    zIndex: 100,
  }
}

class ResumeFloatingButton extends Component {
  handleClick = event => {
    this.props.dispatch(togglePane());
    this.props.dispatch(startWaiting());
  }

  render() {
    const classes = this.props.classes;
    return (
      <Button
        className={classes.root}
        onClick={this.handleClick}
        variant="fab" color="secondary"
        title="resume"
      >
        <img width="65%" alt="resume" src={resumeIcon}/>
      </Button>
    );
  }
}

export default connect(null)(withStyles(styles)(ResumeFloatingButton));
