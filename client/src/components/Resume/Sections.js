import React, { Component, Fragment } from "react";
import { Button, MenuItem, Select } from "@material-ui/core";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faLightbulb from "@fortawesome/fontawesome-free-regular/faLightbulb";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import Keyword from "./Keyword";
import { primary, secondary } from "../../theme";

const resume = {
  intro: "Hello there, my name is Steven Than. I'm a grad student at Northeastern University working toward my Master's degree in Computer Science with "
      + " specializations in Game Design and Artificial Intelligence.\nPrior grad school, I was a fullstack developer, "
      + "and had worked on various types of projects ranging from customer-facing interfaces to internal tools to "
      + "hardware/software integration.\nI'm currently in search for full-time software development opportunities.",
  skills: {
    order: [
      "languages", "systems", "databases", "frameworks/libraries", "testing", "dev ops"
    ],
    languages: [
      "C",
      "C#",
      { displayText: "Java", searchText: "^Java$" },
      { displayText: "JavaScript", searchText: "^JavaScript$" },
      { displayText: "Lua", searchText: "^Lua$" },
      "PHP",
      { displayText: "Python", searchText: "^Python$" },
      "Racket/Scheme",
      { displayText: "Swift", searchText: "^Swift$" },
      "Typescript",
    ],
    systems: ["Windows XP/7/8/10", "macOS", "Linux"],
    databases: [
      "Cassandra",
      { displayText: "ElasticSearch", searchText: "^ElasticSearch$" },
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
      { displayText: "GraphQL", searchText: "^GraphQL" },
      { displayText: "Japronto", searchText: "^Japronto$" },
      { displayText: "jQuery", searchText: "^jQuery$" },
      { displayText: "Pyramid", searchText: "^Pyramid$" },
      { displayText: "PyTorch", searchText: "^PyTorch$" },
      { displayText: "ReactJS", searchText: "^ReactJS$" },
      { displayText: "Redux", searchText: "^Redux$" },
    ],
    testing: [
      "Jasmine",
      { displayText: "JUnit", searchText: "^JUnit$" },
      { displayText: "pytest", searchText: "^pytest$" },
      { displayText: "unittest", searchText: "^unittest$" },
      { displayText: "mocha", searchText: "^mocha$" },
      { displayText: "chai", searchText: "^chai$" },
      "RackUnit"
    ],
    "dev ops": [
      "Ansible",
      { displayText: "AWS (EC2, RDS, S3)", searchText: "^(AWS|EC2|RDS|S3|SQS)$" },
      "Bamboo",
      { displayText: "Docker", searchText: "^Docker$" },
      "Jenkins",
      "Google cloud (Compute engine, Firebase)",
      "Mesos",
      { displayText: "Heroku", searchText: "^Heroku$" },
      "TravisCI",
      "Terraform",
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
      college: "Khoury College of Computer Sciences",
      degree: "Candidate for a Master of Science in Computer Science",
      gpa: "3.97/4.00",
      courses: ["Object Oriented Design", "Algorithms", "Computer Systems", "Game AI", "Human-Computer Interaction", "Computer Networks", "Advanced Software Development"]
    },
    su: {
      name: "Seattle University",
      location: "Seattle, WA",
      from: "Jan 2013",
      to: "Mar 2015",
      graduation: "Mar 2015",
      college: "Albers School of Business and Economics",
      degree: "Bachelor of Arts in Finance and Information Systems (double major)",
      gpa: "3.7/4.0",
      courses: ["Applied Statistics", "Object Oriented Modeling", "Web Technologies", "Data Mining", "Data Management"]
    }
  },
  experience: {
    order: ["cap1", "trip", "neu", "hng", "su"],
    cap1: {
      employer: "Capital One",
      location: "Richmond, VA",
      title: "Software engineer intern",
      from: "Jun 2019",
      to: "Aug 2019",
      responsibilities: [
        "Part of wikibuy.com integration team. Helped migrate 10% of Wikibuy's microservices to Capital One existing infrastructure",
        "Onboarded wikibuy to Capital One's enterprise system logging platform with FluentD, AWS Kinesis stream and ELK stack",
        "Awarded 2nd place (out of 100+ teams) of the annual Capital One intern hackathon"
      ],
    },
    trip: {
      employer: "TripAdvisor",
      location: "Boston, MA",
      title: "Software engineer co-op",
      from: "Jan 2019",
      to: "Jun 2019",
      responsibilities: [
        "Member of the experiences (attractions) demand team that provide 100,000+ tours and activities for millions of customers using Java, TypeScript, SCSS, MySQL and Solr",
        "Improved user experience with server-side caching and static asset delivery optimization; increased Google PageSpeed score by 20+ points for both desktop and mobile sites",
        "Responsible for build tools migrations (Webpack 3 → 4, Maven → Gradle) that sped up project compile time by 300%"
      ],
    },
    neu: {
      employer: "Northeastern University",
      location: "Boston, MA",
      title: "Grad teaching assistant",
      from: "Sep 2017",
      to: "Present",
      responsibilities: [
        "Teach CS fundamentals and functional programming techniques for grad students using Racket/Scheme",
        "Provide office hours to address students’ concerns for in-class materials and assignments",
        "Handle weekly assignment/exam grading and recitation sessions"
      ],
    },
    hng: {
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
    su: {
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
  },
  interest: [
    "Dogs", "Guinea Pigs", "Traveling", "Weight Lifting"
  ]
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
  );
};

export const Intro = props => {
  return (
    <Fragment>
      {resume.intro.split("\n").map((paragraph, idx) => (
        <div key={idx} style={{ paddingBottom: lineSpacing }}>{paragraph}</div>
      ))}
    </Fragment>
  );
};

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
};

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
};

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
};

export const Interest = props => {
  return (
    <div>
      {resume.interest.join(", ")}
    </div>
  );
};

export const Instruction = props => {
  return (
    <div>
      <FontAwesomeIcon icon={faLightbulb} size="lg" />
      &nbsp;&nbsp;
      <i><small style={{ fontWeight: "lighter" }}>Click on underlined keywords to see relevant projects</small></i>
    </div>
  );
};

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
