import React from "react";
import { connect } from "react-redux";

import ProjectList from "../components/ProjectList";
import projects from "../fake-data";

const mapStateToProps = state => ({
  projects: projects
});

export default connect(mapStateToProps)(ProjectList);
