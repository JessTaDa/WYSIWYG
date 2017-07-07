import React, { Component } from 'react';
import './App.css';
import { Editor, config } from 'react-draft-wysiwyg';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { editorState, contentState, convertToRaw, getCurrentContent, RichUtils} from 'draft-js'
import draftToMarkdown from 'draftjs-to-markdown';

class CustomEditor extends Component {

onEditorStateChange = (editorState) => {
  const rawContentState = convertToRaw(editorState.getCurrentContent());
  const markup = draftToMarkdown(rawContentState);
  console.log(markup)
}

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
         onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}

export default CustomEditor;
