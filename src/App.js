import React, { Component } from 'react';
import './App.css';
import { Editor, config } from 'react-draft-wysiwyg';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, ContentState, convertToRaw, convertFromRaw, getCurrentContent } from 'draft-js'


import draftToMarkdown from 'draftjs-to-markdown';

const rawContentState = convertToRaw(EditorState.getCurrentContent());
const markup = draftToMarkdown(ContentState, config);


class CustomEditor extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the Editor</h2>
        </div>
        <Editor
         wrapperClassName="wrapper-class"
         editorClassName="editor-class"
         toolbarClassName="toolbar-class"
        />

        {/* {markup} */}


      </div>
    );
  }
}

export default CustomEditor;
