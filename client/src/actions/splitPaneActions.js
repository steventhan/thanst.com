export const resizePane = width => {
  return {
    type: "RESIZE",
    width
  };
}

export const togglePane = () => {
  return {
    type: "TOGGLE"
  };
}
