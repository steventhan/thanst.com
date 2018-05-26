import { combineReducers } from "redux";
import searchBoxReducer from "./searchBoxReducer";
import splitPaneReducer from "./splitPaneReducer";
import projectListReducer from "./projectListReducer";

export default combineReducers({
  searchText: searchBoxReducer,
  splitPane: splitPaneReducer,
  projectListState: projectListReducer
});
