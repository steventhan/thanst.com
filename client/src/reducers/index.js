import { combineReducers } from "redux";
import searchBoxReducer from "./searchBox";
import splitPaneReducer from "./splitPane";
import projectListReducer from "./projectList";

export default combineReducers({
  searchText: searchBoxReducer,
  splitPane: splitPaneReducer,
  projectListState: projectListReducer
});
