import React from "react";
import { withStyles, Button, Icon } from "@material-ui/core";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/fontawesome-free-brands";
import { AlarmOff } from '@material-ui/icons';
import { EmailOutline, LinkedinBox, GithubCircle } from "mdi-material-ui";


const iconStyle = {
  marginRight: 3,
  fontSize: 20
}

const options = [
  { label: "email", icon: <EmailOutline style={iconStyle} />,  url: "mailto:steven@thanst.com" },
  { label: "github", icon: <GithubCircle style={iconStyle} />, url: "https://github.com/steventhan" },
  { label: "linkedin", icon: <LinkedinBox style={iconStyle} />, url: "https://linkedin.com/in/steven-than" },
];

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    padding: 20
  },
}

const ContactOptions = ({ classes }) => (
  <div className={classes.root}>
    {options.map((option, i) => (
      <Button title={option.label} size="small" color="secondary" key={i} href={option.url}>
        {option.icon}
        {option.label}
      </Button>)
    )}
  </div>
);

export default withStyles(styles)(ContactOptions);
