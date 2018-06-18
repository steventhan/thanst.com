import React, { Component } from "react";
import PropTypes from "prop-types";

class Markdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: ""
    };
    import("showdown").then(showdown => {
      this.setState({ html: new showdown.Converter().makeHtml(this.props.raw)});
    });
  }

  render() {
    const { raw, ...rest } = this.props;
    return (
      <div {...rest} dangerouslySetInnerHTML={{ __html: this.state.html }}></div>
    );
  }
}

Markdown.propTypes = {
  raw: PropTypes.string.isRequired
};

export default Markdown;
