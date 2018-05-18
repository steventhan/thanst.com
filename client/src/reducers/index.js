import { combineReducers } from "redux";
import searchBoxReducer from "./searchBoxReducer";
import splitPaneReducer from "./splitPaneReducer";

export default combineReducers({
  searchText: searchBoxReducer,
  splitPane: splitPaneReducer
});
