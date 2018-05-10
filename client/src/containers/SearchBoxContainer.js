import React, { Component } from "react";
import { connect } from "react-redux";

import { updateSearchText } from "../actions/searchBoxActions";
import SearchBox from "../components/SearchBox";

const mapStateToProps = store => ({
  text: store.searchBox.text
})

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(updateSearchText(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
