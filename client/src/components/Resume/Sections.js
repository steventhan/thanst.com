import React, { Component, Fragment } from "react";
import { Button, MenuItem, Select } from "@material-ui/core";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faLightbulb from "@fortawesome/fontawesome-free-regular/faLightbulb";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import Keyword from "./Keyword";
import { primary, secondary } from "../../theme";

const resume = {
  intro: "Hi, my name is Steven Than. I'm a grad student at Northeastern University working toward my Master's degree in Computer Science with "
      + " specializations in Game Design and Artificial Intelligence.\nPrior grad school, I was a fullstack developer, "
      + "and had worked on various types of projects ranging from customer-facing interfaces to internal tools to "
      + "hardware/software integration.\nI'm currently looking for co-op for latter half of 2018 (August to December).",
  skills: {
    order: [
      "languages", "systems", "software", "databases", "frameworks/libraries", "testing", "cloud services"
    ],
    languages: [
      "C",
      "C#",
      { displayText: "JavaScript", searchText: "^JavaScript$" },
      "Java",
      { displayText: "Lua", searchText: "^Lua$" },
      "PHP",
      { displayText: "Python", searchText: "^Python$" },
      { displayText: "Racket/Scheme", searchText: "^(Racket|Scheme)$" },
      { displayText: "Swift", searchText: "^Swift$" },
    ],
    systems: ["Windows XP/7/8/10", "macOS", "Linux (Ubuntu, CentOS)"],
    software: ["Atom", "Bash", "Git", "JetBrains products", "Photoshop", "Vim", "Sublime", "ZSH"],
    databases: [
      "Microsoft SQL Server",
      { displayText: "MySQL", searchText: "^MySQL$" },
      "SQLite",
      { displayText: "WebSQL", searchText: "^WebSQL$" },
      { displayText: "MongoDB", searchText: "^MongoDB$" },
      { displayText: "PostgreSQL", searchText: "^PostgreSQL$" },
    ],
    "frameworks/libraries": [
      "Angular",
      { displayText: "Bootstrap", searchText: "^Bootstrap$" },
      { displayText: "Django", searchText: "^Django$" },
      { displayText: "ExpressJS", searchText: "^ExpressJS$" },
      { displayText: "Flask", searchText: "^Flask$" },
      { displayText: "Japronto", searchText: "^Japronto$" },
      { displayText: "jQuery", searchText: "^jQuery$" },
      { displayText: "Pyramid", searchText: "^Pyramid$" },
      { displayText: "PyTorch", searchText: "^PyTorch$" },
      { displayText: "ReactJS", searchText: "^ReactJS$" },
      { displayText: "Redux", searchText: "^Redux$" },
    ],
    testing: [
      { displayText: "JUnit", searchText: "^JUnit$" },
      { displayText: "pytest", searchText: "^pytest$" },
      { displayText: "unittest", searchText: "^unittest$" },
      { displayText: "mocha", searchText: "^mocha$" },
      { displayText: "chai", searchText: "^chai$" },
      "RackUnit"
    ],
    "cloud services": [
      { displayText: "AWS (EC2, S3)", searchText: "^(AWS|EC2|S3)$" },
      { displayText: "Google cloud (Compute engine, Firebase)", searchText: "^(Compute engine|Firebase)$" },
      { displayText: "Heroku", searchText: "^Heroku$" },
    ],
  },
  education: {
    order: ["neu", "su"],
    neu: {
      name: "Northeastern University",
      location: "Boston, MA",
      from: "Jan 2017",
      to: "Present",
      graduation: "Dec 2019",
      college: "College of Computer and Information Science",
      degree: "Candidate for a Master of Science in Computer Science",
      gpa: "3.96/4.00",
      courses: ["Object Oriented Design", "Algorithms", "Computer Systems", "Game AI", "Human-Computer Interaction"]
    },
    su: {
      name: "Seattle University",
      location: "Seattle, WA",
      from: "Jan 2013",
      to: "Mar 2015",
      graduation: "Mar 2015",
      college: "Albers School of Business and Economics",
      degree: "Bachelor of Arts in Finance and Information Systems",
      gpa: "3.7/4.0",
      courses: ["Applied Statistics", "Object Oriented Modeling", "Web Technologies", "Data Mining", "Data Management"]
    }
  },
  experience: {
    order: ["ta", "dev", "tech"],
    ta: {
      employer: "Northeastern University",
      location: "Boston, MA",
      title: "CCIS grad teaching assistant",
      from: "Sep 2017",
      to: "Present",
      responsibilities: [
        "Teach CS fundamentals and functional programming techniques for grad students using Racket/Scheme",
        "Provide office hours to address students’ concerns for in-class materials and assignments",
        "Handle weekly assignment/exam grading and recitation sessions"
      ],
    },
    dev: {
      employer: "HNG Group LLC",
      location: "Seattle, WA",
      title: "Software developer",
      from: "July 2015",
      to: "Dec 2016",
      responsibilities: [
        "Developed applications for both customer and internal administrative use. Projects feature inventory control, field technician dispatching platform, appliance knowledge center",
        "Leveraged Python (Flask) + MySQL for backend, HTML + JavaScript (jQuery) for frontend, and GitHub for version control",
        "Monitored, updated and backed up AWS instances to ensure 99% uptime",
        "Set up online marketing campaigns with Yelp and Google AdWords",
      ],
    },
    tech: {
      employer: "Seattle University",
      location: "Seattle, WA",
      title: "Computer technician",
      from: "July 2013",
      to: "Mar 2015",
      responsibilities: [
        "Assisted law faculty and students with fixing software, hardware, network issues both on-site and remotely",
        "Trained for hardware diagnosis and repair with Dell certified technicians",
        "Managed computer part orders and tracked repair tickets",
      ],
    }
  }
}

const lineSpacing = 5;

export const Section = props => {
  const styles = {
    root: {
      padding: "10px 20px",
      display: "flex",
      flexWrap: "wrap",
    },
    left: {
      flexBasis: props.left || 130,
      textTransform: "uppercase",
      fontWeight: "bold",
      color: primary,
      paddingBottom: lineSpacing,
    },
    right: {
      flexBasis: props.right || 350,
      flexDirection: "column",
      flexGrow: 1
    }
  }

  return (
    <div style={styles.root}>
      <div style={styles.left}>{props.label}</div>
      <div style={styles.right}>{props.children}</div>
    </div>
  )
}

export const Intro = props => {
  return (
    <Fragment>
      {resume.intro.split("\n").map((paragraph, idx) => (
        <div key={idx} style={{ paddingBottom: lineSpacing }}>{paragraph}</div>
      ))}
    </Fragment>
  );
}

export const Skills = props => {
  const skillsOrder = resume.skills.order;
  return (
    <Fragment>
      {skillsOrder.map((skill, idx) => {
        return (
          <div key={skill} style={{ paddingBottom: lineSpacing }}>
            <strong style={{ textTransform: "uppercase" }}>{skill}: </strong>
            {resume.skills[skill].map((word, idx) => {
              if (typeof word === "object") {
                return <Keyword key={idx} displayText={word.displayText} searchText={word.searchText} />;
              }
              return word;
            }).reduce((prev, curr) => [prev, ", ", curr])}
          </div>
        );
      })}
    </Fragment>
  );
}

export const Education = props => {
  const educationOrder = resume.education.order;
  return (
    <Fragment>
      {educationOrder.map(schoolName => {
        const style = {
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingBottom: lineSpacing,
        }
        const school = resume.education[schoolName];
        return (
          <div key={schoolName} style={{ paddingBottom: lineSpacing }}>
            <div style={style}>
              <span><strong style={{textTransform: "uppercase"}}>{school.name}</strong> &ndash; {school.location}</span>
              <span>{school.from} &ndash; {school.to}</span>
            </div>
            <div style={style}>
              <strong><i>{school.college}</i></strong>
              {new Date(school.graduation) > new Date() &&
                <span>Expected graduation: {school.graduation}</span>
              }
            </div>
            <div style={style}>
              <span>{school.degree}</span>
            </div>
            <div style={style}>
              <span>Related courses: {school.courses.join(", ")}</span>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}

export const Experience = props => {
  const expOrder = resume.experience.order;
  return (
    <Fragment>
      {expOrder.map(job => {
        const jobDetail = resume.experience[job];
        const style = {
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingBottom: lineSpacing,
        }
        return (
          <div key={job} style={{ paddingBottom: lineSpacing * 2 }}>
            <div style={style}>
              <span>
                <strong style={{textTransform: "uppercase"}}>{jobDetail.employer}</strong> &ndash; {jobDetail.location}
              </span>
              <span>{jobDetail.from} &ndash; {jobDetail.to}</span>
            </div>
            <div style={style}>
              <strong><i>{jobDetail.title}</i></strong>
            </div>
            <ul style={{ margin: 0 }}>
              {jobDetail.responsibilities.map((r, idx) => (
                <li key={idx} style={{ paddingBottom: lineSpacing }}>{r}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </Fragment>
  );
}

export const Instruction = props => {
  return (
    <div>
      <FontAwesomeIcon icon={faLightbulb} size="lg" />
      &nbsp;&nbsp;
      <i><small style={{ fontWeight: "lighter" }}>Click on underlined keywords to see relevant projects</small></i>
    </div>
  );
}

export class Download extends Component {
  state = {
    format: "pdf"
  }

  render() {
    return (
      <Fragment>
        <Button
          onClick={event => event.stopPropagation()}
          variant="raised"
          color="secondary"
          href={`https://s3-us-west-2.amazonaws.com/thanst.com/Steven-Than-resume.${this.state.format}`}
          target="_blank"
          download
        >
          Download resume
        </Button>
        &nbsp;&nbsp;
        <Select
          onClick={event => event.stopPropagation()}
          style={{ color: secondary }}
          value={this.state.format}
          onChange={event => this.setState({ format: event.target.value})}
          IconComponent={() => (
            <ArrowDropDownIcon style={{ top: "calc(50% - 12px)", right: 0, position: "absolute", color: secondary }}/>
          )}
        >
          <MenuItem value="pdf">PDF</MenuItem>
          <MenuItem value="docx">DOCX</MenuItem>
        </Select>
      </Fragment>
    );
  }
}
