import React from "react";
import injectSheet from "react-jss"
import CalendarRange from "mdi-material-ui/CalendarRange";
import GithubCircle from "mdi-material-ui/GithubCircle";
import Presentation from "mdi-material-ui/Presentation";

import { text } from "../../theme";

const styles = {
  root: {
    lineHeight: 1.75,
    "& a": {
      textDecoration: "none",
      color: text,
      "&:hover": {
        textDecoration: "underline"
      }
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
            <GithubCircle /> &nbsp; <a href={link} target="_blank">{link.replace(/^https?:\/\//i, "")}</a>
          </span>
        ))
      )}
      {demo && (
        <span>
          <Presentation /> &nbsp; <a href={demo} target="_blank">{demo.replace(/^https?:\/\//i, "")}</a>
        </span>
      )}
    </div>
  );
};

export default injectSheet(styles)(Metadata);
