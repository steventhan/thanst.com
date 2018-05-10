import React from "react";
import { withStyles, Button } from "material-ui";

const options = [
  { label: "email", url: "mailto:steven@thanst.com" },
  { label: "github", url: "https://github.com/steventhan" },
  { label: "linkedin", url: "https://linkedin.com/in/steven-than" },
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
      <Button size="small" color="secondary" key={i} href={option.url}>
        {option.label}
      </Button>)
    )}
  </div>
);

export default withStyles(styles)(ContactOptions);
