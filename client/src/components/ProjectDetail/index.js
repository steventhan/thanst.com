import { connect } from "react-redux";

import { fetchProjectDetail } from "../../actions/projectDetailActions";
import ProjectDetail from "./ProjectDetail";

const mapStateToProps = (store, ownProps) => ({
  tags: ownProps.tags
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (event, tag) => {
    event.stopPropagation();
  },
  fetchProjectDetail: () => dispatch(fetchProjectDetail(ownProps.match.params.slug))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
