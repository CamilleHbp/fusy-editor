import React from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import initialValue from './RichTextEditorInitialValue.json';
import * as Hotkeys from '../Constants/Hotkeys';
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

class RichTextEditor extends React.Component {
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
        plugins={plugins}
        value={value}
        onChange={this.onChange}
        renderBlock={RenderBlock}
        renderMark={RenderMark}
      />
    );
  }
}

export default RichTextEditor;
