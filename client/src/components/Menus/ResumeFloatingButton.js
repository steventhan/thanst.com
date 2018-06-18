import React, { Component } from "react";
import { withStyles, Button } from "@material-ui/core";
import { Clear } from "@material-ui/icons"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { togglePane } from "../../actions/splitPaneActions";
import { toggleDrawer } from "../../actions/drawerActions";
import { startWaiting } from "../../actions/projectListActions";

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

const mapStateToProps = store => ({
  splitPane: store.splitPane,
  drawer: store.drawer
})

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
    const { splitPane, drawer, classes } = this.props;
    return (
      <Button
        className={classes.root}
        onClick={this.handleClick}
        variant="fab" color="primary"
        title="resume"
      >
        {splitPane.open || drawer.open ? (
          <Clear />
        ) : (
          <img width="65%" alt="resume" src={resumeIcon}/>
        )}
      </Button>
    );
  }
}

ResumeFloatingButton.propTypes = {
  screen: PropTypes.oneOf([ "large", "small" ]).isRequired
}

export default connect(mapStateToProps)(withStyles(styles)(ResumeFloatingButton));
