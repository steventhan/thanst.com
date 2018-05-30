import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

import { Section, Instruction, Download, Intro, Skills, Education, Experience } from "./Sections";

const styles = {
  root: {
    paddingTop: 45,
    paddingBottom: 20,
    backgroundColor: "#fafafa",
    minHeight: "100%",
    color: "#000",
    transition: "width 0.3s linear"
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
