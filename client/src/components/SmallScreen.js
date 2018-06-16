import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Drawer } from "@material-ui/core";
import injectSheet from "react-jss";

import { primary } from "../theme";
import { toggleDrawer } from "../actions/drawerActions";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import ProjectDetail from "./ProjectDetail";


const styles = {
  paper: {
    maxWidth: "90%",
    borderLeft: `5px solid ${primary}`
  },
}

const mapStateToProps = store => ({ drawer: store.drawer });

class SmallScreen extends Component {
  handleActions = event => {
    event.stopPropagation();
    this.props.dispatch(toggleDrawer());
  }

  render() {
    const { drawer, classes } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/projects/:slug" component={ProjectDetail}/>
        </Switch>
        <Drawer
          classes={{ paper: classes.paper}}
          anchor="right"
          open={drawer.open}
          onClose={this.handleActions}
          onClick={this.handleActions}
        >
          <Resume />
        </Drawer>
      </div>
    );
  }
}

export default connect(mapStateToProps, null, null, { pure: false })(injectSheet(styles)(SmallScreen));
