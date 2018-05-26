import React from "react";
import { connect } from "react-redux";
import $ from "jquery";

import ProjectList from "../components/ProjectList";
import projects from "../fake-data";
import { finishUpdate } from "../actions/projectListActions";

const filterProjects =  (projects, searchText) => {
  if (searchText.length === 0) return projects;

  const searchWords = searchText.toLowerCase().split(",").reduce((wordList, word) => {
    let trimmed = word.trim();
    if (trimmed.length > 0) {
      wordList.push(trimmed);
    }
    return wordList;
  }, []);

  return projects.filter(project => {
    return searchWords.some(word => {
      return project.title.toLowerCase().includes(word)
              || project.intro.toLowerCase().includes(word)
              || project.tags.some(tag => tag.toLowerCase().includes(word));
    });
  })
};

const getProjectWidth = splitPaneState => {
  const containerWidth = splitPaneState.open ? splitPaneState.size : $(window).width();
  let projectWidth;

  if (containerWidth > 1200) {
    projectWidth = "25%";
  } else if (containerWidth > 900) {
    projectWidth = "33.33%";
  } else if (containerWidth > 550) {
    projectWidth = "50%";
  } else projectWidth = "100%";

  return projectWidth;
};


const mapStateToProps = store => ({
  projects: filterProjects(projects, store.searchText),
  projectListState: store.projectListState,
  projectWidth: getProjectWidth(store.splitPane)
});

const mapDispatchToProps = dispatch => ({
  onFinishUpdate: () => dispatch(finishUpdate())
});

export default connect(mapStateToProps)(ProjectList);
