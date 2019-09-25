import React from 'react';
import './RichTextEditorToolbar.scss';

class RichTextEditorToolbar extends React.PureComponent {
  render() {
    return (
      <ul className="toolbar">
        <li className="toolbar_item bold">B</li>
        <li className="toolbar_item italic">I</li>
        <li className="toolbar_item underline">U</li>
        <li className="toolbar_item strikethrough">abc</li>
      </ul>
    );
  }
}

export default RichTextEditorToolbar;
