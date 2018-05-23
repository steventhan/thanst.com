import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import SplitPane from "react-split-pane";
import { Scrollbars } from "react-custom-scrollbars";
import $ from "jquery";

import theme, { primary, secondary } from "./theme";
import { resizePane } from "./actions/splitPaneActions";
import NavBar from "./components/menus/NavBar";
import ResumeFloatingButton from "./components/menus/ResumeFloatingButton";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Resume from "./components/Resume";


const mapStateToProps = store => ({ splitPane: store.splitPane });

class App extends Component {
  handlePaneResize = width => this.props.dispatch(resizePane(width));

  render() {
    const { splitPane } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <CssBaseline />
            <NavBar />
            <ResumeFloatingButton />
            <SplitPane
              split="vertical"
              onChange={this.handlePaneResize}
              minSize={300}
              size={splitPane.open ? splitPane.size : "100%"}
              resizerStyle={{ width: 7, backgroundColor: secondary }}
            >
              <Scrollbars>
                <Switch>
                  <Route exact path="/" component={AboutMe}/>
                  <Route exact path="/projects" component={Projects}/>
                </Switch>
              </Scrollbars>
              <Scrollbars>
                <Resume />
              </Scrollbars>
            </SplitPane>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps)(App);
