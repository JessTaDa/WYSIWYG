import React from 'react';
import { Editor, config } from 'react-draft-wysiwyg';
import { render, ReactDOM } from 'react-dom';
import { editorState, contentState, convertToRaw, getCurrentContent, RichUtils} from 'draft-js'
import draftToMarkdown from 'draftjs-to-markdown';


const MarkdownDisplay = (props) => {
    return (
      <div>
        <textarea disabled={true} type="text" value={props.markdown} cols="100" rows="10"></textarea>
      </div>
    )
  }

export default MarkdownDisplay;
