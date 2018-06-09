import { createMuiTheme } from "@material-ui/core/styles";

export const secondary ="#4d5668";
export const primary = "#6480A8";
export const text = "#fafafa";

export default createMuiTheme({
  palette: {
    type: "dark",
    common: {
      white: "#fff",
      black: "#000"
    },
    primary: {
      main: primary,
      contrastText: text
    },
    secondary: {
      main: secondary,
      contrastText: text
    },
  }
});
