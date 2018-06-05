import React from "react";
import PropTypes from "prop-types";
import showdown from "showdown";

const Markdown = ({ raw, ...rest }) => {
  const html = new showdown.Converter().makeHtml(raw);
  return (
    <div {...rest} dangerouslySetInnerHTML={{ __html: html }}></div>
  );
};

Markdown.propTypes = {
  raw: PropTypes.string.isRequired
};

export default Markdown;
