import { connect } from "react-redux";

import { replaceSearchWords } from "../../../actions/searchBoxActions";
import SearchBox from "./SearchBox";

const mapStateToProps = store => ({
  text: store.searchText
})

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(replaceSearchWords(event.target.value)),
  onClearButtonClick: event => dispatch(replaceSearchWords(""))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
