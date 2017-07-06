import React, { Component } from 'react';
import './App.css';
import { Editor } from 'react-draft-wysiwyg';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

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
      </div>
    );
  }
}

export default CustomEditor;
