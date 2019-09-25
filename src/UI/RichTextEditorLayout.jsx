import React from 'react';
import RichTextEditor from '../RichTextEditor/RichTextEditor';
import RichTextEditorToolbar from './RichTextEditorToolbar';
import './RichTextEditorLayout.scss';

class RichTextEditorLayout extends React.PureComponent {
  render() {
    return (
      <div className="editor-layout">
        <div className="toolbar-container">
          <RichTextEditorToolbar />
        </div>
        <div className="editor-container">
          <RichTextEditor />
        </div>
      </div>
    );
  }
}

export default RichTextEditorLayout;
