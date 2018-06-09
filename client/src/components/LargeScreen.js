import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import injectSheet from "react-jss";
import SplitPane from "react-split-pane";
import { Scrollbars } from "react-custom-scrollbars";

import { resizePane } from "../actions/splitPaneActions";
import { startWaiting, sendUpdateSignal } from "../actions/projectListActions";
import { primary } from "../theme";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Resume from "./Resume";
import ProjectDetail from "./ProjectDetail";


const styles = {
  resizer: {
    cursor: "col-resize",
    width: 7,
    backgroundColor: primary,
  },
}

const mapStateToProps = store => ({ splitPane: store.splitPane });

class LargeScreen extends Component {
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
        <Scrollbars>
          <Switch>
            <Route exact path="/" component={AboutMe}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/projects/:slug" component={ProjectDetail}/>
          </Switch>
        </Scrollbars>
        <Scrollbars>
          <Resume />
        </Scrollbars>
      </SplitPane>
    );
  }
}

export default connect(mapStateToProps, null, null, { pure: false })(injectSheet(styles)(LargeScreen));
