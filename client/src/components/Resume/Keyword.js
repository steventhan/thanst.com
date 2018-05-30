import React from "react";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { replaceSearchWords } from "../../actions/searchBoxActions";


const styles = {
  root: {
    cursor: "pointer",
    borderBottom: "1px dashed"
  },
}

const Keyword = withRouter(({ classes, displayText, searchText, dispatch, history }) => (
  <span
    onClick={() => {
      history.push("/projects");
      dispatch(replaceSearchWords(`${searchText}`));
    }}
    className={classes.root}
    onMouseDown={event => event.preventDefault()}
  >
    {displayText === undefined ? searchText : displayText}
  </span>
));

export default connect(null)(withStyles(styles)(Keyword));
