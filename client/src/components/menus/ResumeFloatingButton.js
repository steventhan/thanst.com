import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { togglePane } from "../../actions/splitPaneActions";
import { toggleDrawer } from "../../actions/drawerActions";
import { startWaiting } from "../../actions/projectListActions";
import { withStyles, Button } from "@material-ui/core";

import resumeIcon from "../../resume-icon.png";

const styles = {
  root: {
    position: "fixed",
    bottom: 16,
    right: 16,
    zIndex: 9999,
    "@media (min-width: 900px)": {
      bottom: 20,
      right: 24,
    }
  }
}

class ResumeFloatingButton extends Component {
  handleClick = event => {
    const { screen } = this.props;
    if (screen === "large") {
      this.props.dispatch(togglePane());
      this.props.dispatch(startWaiting());
    } else if (screen === "small") {
      this.props.dispatch(toggleDrawer());
    }
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

ResumeFloatingButton.propTypes = {
  screen: PropTypes.oneOf([ "large", "small" ]).isRequired
}

export default connect(null)(withStyles(styles)(ResumeFloatingButton));
