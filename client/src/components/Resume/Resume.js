import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

import { Section, Instruction, Download, Intro, Skills, Education, Experience } from "./Sections";

const styles = {
  root: {
    paddingBottom: 30,
    backgroundColor: "#fafafa",
    color: "#000",
    transition: "width 0.3s linear",
    "@media (min-width: 900px)": {
      paddingTop: 45,
    }
  },
}

class Resume extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Section>
          <Instruction />
        </Section>
        <Section>
          <Download />
        </Section>
        <Section label="Intro">
          <Intro />
        </Section>
        <Section label="Skills">
          <Skills />
        </Section>
        <Section label="Education">
          <Education />
        </Section>
        <Section label="Experience">
          <Experience />
        </Section>
      </div>
    );
  }
}


export default withStyles(styles)(Resume);
