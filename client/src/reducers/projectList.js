const initialState = {
  waiting: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "PROJECTLIST_START_WAITING":
      return {
        waiting: true
      };

    case "PROJECTLIST_SEND_UPDATE_SIGNAL":
      return {
        waiting: false
      };

    case "PROJECTLIST_FINISH_UPDATE":
      return {
        waiting: false
      };

    default:
      return state;
  }
}
