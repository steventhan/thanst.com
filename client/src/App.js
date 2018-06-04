import React, { Component } from "react";
import { findDOMNode } from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import SplitPane from "react-split-pane";
import { Scrollbars } from "react-custom-scrollbars";
import injectSheet from "react-jss"

import theme, { secondary } from "./theme";
import { resizePane } from "./actions/splitPaneActions";
import { startWaiting, sendUpdateSignal } from "./actions/projectListActions";
import { NavBar, ResumeFloatingButton } from "./components/Menus";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Resume from "./components/Resume";

const styles = {
  resizer: {
    cursor: "col-resize",
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
        this.props.dispatch(sendUpdateSignal());
      }
    });
  }

  handlePaneResize = width => this.props.dispatch(resizePane(width));

  handleDragStarted = () => {
    this.setState({ pane1Style: undefined, resizerStyle: { opacity: 0.8 } });
    this.props.dispatch(startWaiting());
  }

  handleDragFinished = () => {
    this.setState({ pane1Style: { transition: "width 0.3s linear" }, resizerStyle: undefined });
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
              onDragFinished={this.handleDragFinished}
              minSize={300}
              size={splitPane.open ? splitPane.size : "100%"}
              pane1Style={this.state.pane1Style}
              resizerStyle={this.state.resizerStyle}
              resizerClassName={classes.resizer}
            >
              <Switch>
                <Route exact path="/" component={AboutMe}/>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/projects/:slug" component={ProjectDetail}/>
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
