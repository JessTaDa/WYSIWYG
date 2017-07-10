import React from 'react';
import { Editor, config } from 'react-draft-wysiwyg';
import { render, ReactDOM } from 'react-dom';
// import { defaultToolbar } from '../node_modules/react-draft-wysiwyg/js/src/config/'
var ReactMarkdown = require('react-markdown');



const MarkdownToHtml = (props) => {
    return (
      <ReactMarkdown source={props.markdown} />
    )
}


export default MarkdownToHtml;
