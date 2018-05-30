import { connect } from "react-redux";
import $ from "jquery";

import ProjectList from "./ProjectList";
import projects from "../../../fake-data";

const toRegexList = searchText => {
  return searchText.toLowerCase().split(",").reduce((wordList, word) => {
    let trimmed = word.trim();
    if (trimmed.length > 0) {
      try {
        wordList.push(RegExp(trimmed));
      } catch(err) {}
    }
    return wordList;
  }, []);
}

const filterProjects =  (projects, searchText) => {
  if (searchText.length === 0) return projects;

  return projects.filter(project => {
    return toRegexList(searchText).some(regex => {
      return regex.test(project.title.toLowerCase())
              || regex.test(project.intro.toLowerCase())
              || project.tags.some(tag => regex.test(tag.toLowerCase()));
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

export default connect(mapStateToProps)(ProjectList);
