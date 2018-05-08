import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline } from "material-ui";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

import NavBar from "./components/menus/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    common: {
      white: "#fff",
      black: "#000"
    },
    primary: {
      main: "#4d5668",
      contrastText: "#fafafa"
    },
    secondary: {
      main: "#6480A8",
      contrastText: "#fafafa"
    },
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={ theme }>
        <Router>
          <Fragment>
            <CssBaseline />
            <NavBar />
            <Switch>
              <Route exact path="/" component={ Home }/>
              <Route exact path="/projects" component={ Projects }/>
            </Switch>
          </Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
