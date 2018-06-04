import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import injectSheet from "react-jss";

import { secondary } from "../theme";

const styles = {
  root: {
    display: "flex",
    paddingBottom: 5,
    justifyContent: "center",
  },
  title: {
    paddingBottom: 10,
    display: "inline-block",
    position: "relative",
    "&:before": {
      content: "\"\"",
      position: "absolute",
      width: "60%",
      height: 1,
      bottom: 0,
      left: "20%",
      borderBottom: `2.5px solid ${secondary}`,
    }
  }
}

const UnderlinedTitle = ({ classes, text }) => {
  return (
    <div className={classes.root}>
      <Typography align="center" className={classes.title} variant="title">{text}</Typography>
    </div>
  );
};

UnderlinedTitle.propTypes = {
  text: PropTypes.string.isRequired
}

export default injectSheet(styles)(UnderlinedTitle);
