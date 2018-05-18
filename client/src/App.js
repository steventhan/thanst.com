import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { CssBaseline } from "material-ui";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import SplitPane from "react-split-pane";
import $ from "jquery";

import { resizePane } from "./actions/splitPaneActions";
import NavBar from "./components/menus/NavBar";
import AboutMe from "./components/AboutMe";
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

const mapStateToProps = store => ({ splitPane: store.splitPane });

class App extends Component {
  handlePaneResize = width => this.props.dispatch(resizePane(width));

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <CssBaseline />
            <NavBar />
            <SplitPane
              split="vertical"
              onChange={this.handlePaneResize}
              size={this.props.splitPane}
              resizerStyle={{ width: 10, backgroundColor: "red" }}
            >
              <Switch>
                <Route exact path="/" component={AboutMe}/>
                <Route exact path="/projects" component={Projects}/>
              </Switch>
              <div></div>
            </SplitPane>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps)(App);
