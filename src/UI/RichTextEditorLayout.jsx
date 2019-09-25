import React from 'react';
import RichTextEditor from '../RichTextEditor/RichTextEditor';
import './RichTextEditorLayout.scss';

class RichTextEditorLayout extends React.PureComponent {
  render() {
    return (
      <div className="editor-layout">
        <ul className="editor-menu">
          <li className="editor-menu_item bold">B</li>
          <li className="editor-menu_item italic">I</li>
          <li className="editor-menu_item underline">U</li>
          <li className="editor-menu_item strikethrough">abc</li>
        </ul>
        <content className="editor">
          <RichTextEditor />
        </content>
      </div>
    );
  }
}

export default RichTextEditorLayout;
