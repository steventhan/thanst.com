const initialState = {
  fetching: false,
  error: null,
  projects: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "PROJECTDETAIL_FETCH_DETAIL_PENDING":
      return {
        ...state,
        fetching: true
      };

    case "PROJECTDETAIL_FETCH_DETAIL_FULL":
      return {
        ...state,
        fetching: true
      };

    default:
      return state;
  }
}
