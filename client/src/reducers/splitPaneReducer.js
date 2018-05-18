import $ from "jquery";

const initialState = parseInt($(window).width()/2, 10);

export default (state = initialState, action) => {
  switch (action.type) {
    case "RESIZE":
      return action.width;

    default:
      return state;
  }
}
