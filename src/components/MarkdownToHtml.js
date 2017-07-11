import React from 'react';
import { Editor, config } from 'react-draft-wysiwyg';
import { render, ReactDOM } from 'react-dom';
var ReactMarkdown = require('react-markdown');

const MarkdownToHtml = (props) => {
    return (
      <ReactMarkdown source={props.markdown} />
    )
}

export default MarkdownToHtml;
