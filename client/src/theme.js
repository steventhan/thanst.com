import { createMuiTheme } from "@material-ui/core/styles";

export const primary ="#4d5668";
export const secondary = "#6480A8";

export default createMuiTheme({
  palette: {
    type: "dark",
    common: {
      white: "#fff",
      black: "#000"
    },
    primary: {
      main: primary,
      contrastText: "#fafafa"
    },
    secondary: {
      main: secondary,
      contrastText: "#fafafa"
    },
  }
});
