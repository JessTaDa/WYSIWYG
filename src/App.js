import React, { Component } from 'react';
import './App.css';
import { Editor, config } from 'react-draft-wysiwyg';
import { render } from 'react-dom';
// import { defaultToolbar } from '../node_modules/react-draft-wysiwyg/js/src/config/'
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { editorState, contentState, convertToRaw, getCurrentContent, RichUtils} from 'draft-js'
import draftToMarkdown from 'draftjs-to-markdown';
import MarkdownDisplay from './components/MarkdownDisplay'
import MarkdownToHtml from './components/MarkdownToHtml'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ""
    }
    this.onEditorStateChange = this.onEditorStateChange.bind(this)
  }


onEditorStateChange = (editorState) => {
  const rawContentState = convertToRaw(editorState.getCurrentContent());
  const markdown = draftToMarkdown(rawContentState);
  this.setState({markdown: markdown});
  // console.log(markdown)
  console.log(this.state)
}


  render() {
    return (
      <div>
        {/* <div className="App-header">
          <h2>Welcome to the Editor</h2>

        </div> */}
        <Editor
         wrapperClassName="wrapper-class"
         editorClassName="editor-class"
         toolbarClassName="toolbar-class"
         onEditorStateChange={this.onEditorStateChange}
        />

        <MarkdownDisplay
          markdown={this.state.markdown}
        />

        <MarkdownToHtml
          markdown={this.state.markdown}
        />
      </div>
    );
  }
}

export default App;
