import $ from "jquery";

const initialState = {
  open: false,
  size: parseInt($(window).width()/2, 10),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "RESIZE":
      return {
        ...state,
        size: action.width,
      };

    case "TOGGLE":
      return {
        ...state,
        open: !state.open,
      };

    default:
      return state;
  }
}
