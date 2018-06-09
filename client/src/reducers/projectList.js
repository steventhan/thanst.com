const initialState = {
  waiting: false,
  fetching: false,
  error: null,
  projects: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "PROJECTLIST_START_WAITING":
      return {
        ...state,
        waiting: true
      };

    case "PROJECTLIST_SEND_UPDATE_SIGNAL":
      return {
        ...state,
        waiting: false
      };

    case "PROJECTLIST_FETCH_PROJECTS_PENDING":
      return {
        ...state,
        fetching: true,
      };

    case "PROJECTLIST_FETCH_PROJECTS_FULFILLED":
      return {
        ...state,
        fetching: false,
        projects: action.payload.data,
        error: null
      };

    case "PROJECTLIST_FETCH_PROJECTS_REJECTED":
      return {
        ...state,
        fetching: false,
        error: action.payload
      };

    default:
      return state;
  }
}
