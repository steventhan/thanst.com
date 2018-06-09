import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import $ from "jquery";

import theme from "./theme";
import { NavBar, ResumeFloatingButton } from "./components/Menus";
import LargeScreen from "./components/LargeScreen";
import SmallScreen from "./components/SmallScreen";

class App extends Component {
  state = {
    screen: $(window).width() > 900 ? "large" : "small"
  }

  render() {
    const { screen } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <CssBaseline />
            <NavBar />
            <ResumeFloatingButton screen={screen} />
            { screen === "large" ? (
              <LargeScreen />
            ) : (
              <SmallScreen />
            )}
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
