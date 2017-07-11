import React from 'react';
import { Editor, config } from 'react-draft-wysiwyg';
import { render } from 'react-dom';
// import { defaultToolbar } from '../node_modules/react-draft-wysiwyg/js/src/config/'
import { editorState, contentState, convertToRaw, getCurrentContent, RichUtils} from 'draft-js'
import draftToMarkdown from 'draftjs-to-markdown';



const Editor = (props) => {
    return (
      <div>
        <textarea disabled={true} type="text" value={props.onEditorStateChange} cols="50" rows="10"></textarea>
      </div>
    )
  }


export default Editor;
