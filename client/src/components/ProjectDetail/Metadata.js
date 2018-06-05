import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss"
import { Link } from "react-router-dom";
import { CalendarRange, GithubCircle, Presentation } from "mdi-material-ui";

import { text } from "../../theme";

const styles = {
  root: {
    lineHeight: 1.75,
    "& a": {
      color: text,
    },
    "& span": {
      display: "flex",
      alignItems: "center",
    },
    "& svg": {
      fontSize: 20
    }
  }
}

const Metadata = ({ metadata, classes }) => {
  const { start, end, github, demo } = metadata;
  return (
    <div className={classes.root}>
      <span>
        <CalendarRange /> &nbsp;{`${start} - ${end ? end : "Present"}`}
      </span>
      {github && (
        github.map((link, idx) => (
          <span key={idx}>
            <GithubCircle /> &nbsp; <a href={link} target="_blank">{link.replace(/^https?\:\/\//i, "")}</a>
          </span>
        ))
      )}
      {demo && (
        <span>
          <Presentation /> &nbsp; <a href={demo} target="_blank">{demo.replace(/^https?\:\/\//i, "")}</a>
        </span>
      )}
    </div>
  );
};

// Markdown.propTypes = {
//   raw: PropTypes.string.isRequired
// }

export default injectSheet(styles)(Metadata);
