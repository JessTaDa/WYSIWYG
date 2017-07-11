# WYSIWYG text editor

A basic WYSIWYG text editor converting HTML text --&gt; Markdown --&gt; HTML text. Built to reduce the risk of inconsistencies caused by typing text in HTML. This basic react app allows users to style HTML text in the editor, see this displayed in Markdown, and see it rendered back in HTML format.&nbsp;
- Used "react-draft-wysiwyg” component [https://github.com/jpuri/react-draft-wysiwyg](https://github.com/jpuri/react-draft-wysiwyg)). &nbsp;
- Docs found here: [https://jpuri.github.io/react-draft-wysiwyg/#/docs?_k=jjqinp](https://jpuri.github.io/react-draft-wysiwyg/#/docs?_k=jjqinp))&nbsp;
- To configure the toolbar, edit toolbar based on [https://github.com/jpuri/react-draft-wysiwyg/blob/master/src/config/defaultToolbar.js](https://github.com/jpuri/react-draft-wysiwyg/blob/master/src/config/defaultToolbar.js))&nbsp;

```javascript
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
```
