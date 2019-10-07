import React from 'react';
import SlateEditor from '../slate-implementation/SlateEditor';
import Toolbar from './toolbar/Toolbar';
import './EditorLayout.scss';

class EditorLayout extends React.PureComponent {
  render() {
    return (
      <div className="editor-layout">
        <div className="toolbar-container">
          <Toolbar />
        </div>
        <div className="editor-container">
          <SlateEditor />
        </div>
      </div>
    );
  }
}

export default EditorLayout;
