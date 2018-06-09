export const replaceSearchWords = text => {
  return {
    type: "REPLACE",
    text
  };
}

export const appendSearchWord = text => {
  return {
    type: "APPEND",
    text
  };
}
