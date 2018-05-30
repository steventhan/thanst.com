import React, { Component } from "react";
import { connect } from "react-redux";

import { appendSearchWord } from "../../../actions/searchBoxActions";
import ProjectTags from "./ProjectTags";

const mapStateToProps = (store, ownProps) => ({
  tags: ownProps.tags
})

const mapDispatchToProps = dispatch => ({
  onClick: (event, tag) => {
    event.stopPropagation();
    dispatch(appendSearchWord(`^${tag}$`));
    return;
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectTags);
