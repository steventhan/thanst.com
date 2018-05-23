import React from "react";
import { connect } from "react-redux";

import ProjectList from "../components/ProjectList";
import projects from "../fake-data";

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
}

const mapStateToProps = store => ({
  projects: filterProjects(projects, store.searchText)
});

export default connect(mapStateToProps)(ProjectList);
