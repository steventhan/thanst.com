export default (state = "", action) => {
  switch (action.type) {
    case "REPLACE":
      return action.text;

    case "APPEND":
      if (state === "") return action.text;
      return `${state}, ${action.text}`;

    default:
      return state;
  }
}
