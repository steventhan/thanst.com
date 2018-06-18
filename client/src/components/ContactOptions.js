import React from "react";
import { withStyles, Button } from "@material-ui/core";
import Email from "mdi-material-ui/Email";
import LinkedinBox from "mdi-material-ui/LinkedinBox";
import GithubCircle from "mdi-material-ui/GithubCircle";


const iconStyle = {
  marginRight: 3,
  fontSize: 20
}

const options = [
  { label: "email", icon: <Email style={iconStyle} />,  url: "mailto:steven@thanst.com" },
  { label: "github", icon: <GithubCircle style={iconStyle} />, url: "https://github.com/steventhan" },
  { label: "linkedin", icon: <LinkedinBox style={iconStyle} />, url: "https://linkedin.com/in/steven-than" },
];

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    padding: 20
  },
  buttonLabel: {
    display: "flex",
    alignItems: "flex-end"
  }
}

const ContactOptions = ({ classes }) => (
  <div className={classes.root}>
    {options.map((option, i) => (
      <Button title={option.label} size="small" color="primary" key={i} href={option.url}>
        <div className={classes.buttonLabel}>
          {option.icon}
          {option.label}
        </div>
      </Button>)
    )}
  </div>
);

export default withStyles(styles)(ContactOptions);
