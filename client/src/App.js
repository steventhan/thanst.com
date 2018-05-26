import React, { Component, Fragment } from "react";
import { findDOMNode } from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import SplitPane from "react-split-pane";
import { Scrollbars } from "react-custom-scrollbars";
import injectSheet from "react-jss"


import $ from "jquery";

import theme, { primary, secondary } from "./theme";
import { resizePane } from "./actions/splitPaneActions";
import { startWaiting, sendUpdateSignal, finishUpdate } from "./actions/projectListActions";
import NavBar from "./components/menus/NavBar";
import ResumeFloatingButton from "./components/menus/ResumeFloatingButton";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

const styles = {
  resizer: {
    "&:hover": {
      cursor: "col-resize"
    },
    width: 7,
    backgroundColor: secondary,
  },
}


const mapStateToProps = store => ({ splitPane: store.splitPane });

class App extends Component {
  state = {
    pane1Style: { transition: "width 0.3s ease" },
  }

  constructor(props) {
    super(props);
    this.splitPane = React.createRef();
  }

  componentDidMount() {
    const node = findDOMNode(this.splitPane.current.pane1);
    node.addEventListener("transitionend", event => {
      if (event.propertyName === "width") {
        this.props.dispatch(finishUpdate());
      }
    });
  }

  handlePaneResize = width => this.props.dispatch(resizePane(width));

  handleDragStarted = () => {
    this.setState({ pane1Style: undefined });
    this.props.dispatch(startWaiting());
  }

  handleDragFinished = () => {
    this.setState({ pane1Style: { transition: "width 0.3s linear" } });
    this.props.dispatch(sendUpdateSignal());
  }

  render() {
    const { splitPane, classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <CssBaseline />
            <NavBar />
            <ResumeFloatingButton />
            <SplitPane
              ref={this.splitPane}
              split="vertical"
              onChange={this.handlePaneResize}
              onDragStarted={this.handleDragStarted}
              onDragStarted={this.handleDragStarted}
              onDragFinished={this.handleDragFinished}
              minSize={300}
              size={splitPane.open ? splitPane.size : "100%"}
              pane1Style={this.state.pane1Style}
              resizerClassName={classes.resizer}
            >
              <Switch>
                <Route exact path="/" component={AboutMe}/>
                <Route exact path="/projects" component={Projects}/>
              </Switch>
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

export default connect(mapStateToProps)(injectSheet(styles)(App));
