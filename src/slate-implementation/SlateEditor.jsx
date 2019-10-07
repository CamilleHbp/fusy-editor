import React from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import './SlateEditor.scss';
import * as Hotkeys from '../constants/Hotkeys';
import initialValue from './RichTextEditorInitialValue.json';
import MarkHotkey from './Format/MarkHotkey';
import RenderMark from './Format/RenderMark';
import RenderBlock from './Format/RenderBlock';

const plugins = [
  MarkHotkey({ key: 'b', type: 'bold', modKey: Hotkeys.ctrlModKey }),
  MarkHotkey({ key: '`', type: 'code', modKey: Hotkeys.ctrlModKey }),
  MarkHotkey({ key: 'i', type: 'italic', modKey: Hotkeys.ctrlModKey }),
  MarkHotkey({ key: '~', type: 'strikethrough', modKey: Hotkeys.ctrlModKey }),
  MarkHotkey({ key: 'u', type: 'underline', modKey: Hotkeys.ctrlModKey })
];

class SlateEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: Value.fromJSON(initialValue)
    };
  }

  onChange = ({ value }) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <Editor
        className="editor"
        plugins={plugins}
        value={value}
        onChange={this.onChange}
        renderBlock={RenderBlock}
        renderMark={RenderMark}
      />
    );
  }
}

export default SlateEditor;
