const initialState = {
  open: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "DRAWER_TOGGLE":
      return {
        open: !state.open,
      };

    default:
      return state;
  }
}
