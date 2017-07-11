import React, { Component } from 'react';
import './App.css';
import { Editor, config } from 'react-draft-wysiwyg';
import { render } from 'react-dom';
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
  console.log(this.state)
}

  render() {
    return (
      <div>
        <Editor
         wrapperClassName="wrapper-class"
         editorClassName="editor-class"
         toolbarClassName="toolbar-class"
         onEditorStateChange={this.onEditorStateChange}
        //  edit toolbar based on `https://github.com/jpuri/react-draft-wysiwyg/blob/master/src/config/defaultToolbar.js`
         toolbar={{
            options: ['inline', 'blockType', 'list', 'link'],
            inline: {
              options: ['bold'],
            },
            list: {
              options: ['ordered', 'unordered'],
            },
          }}
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
