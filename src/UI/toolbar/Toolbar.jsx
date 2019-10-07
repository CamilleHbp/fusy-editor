import React from '../../../node_modules/react';
import {
  FormatBold,
  FormatItalic,
  FormatStrikethrough,
  FormatUnderlined
} from '../../../node_modules/@material-ui/icons';
import './Toolbar.scss';

class Toolbar extends React.PureComponent {
  /**
   * Check if the current selection has a mark with `type` in it.
   *
   * @param {String} type
   * @return {Boolean}
   */

  hasMark = type => {
    const { value } = this.state;
    return value.activeMarks.some(mark => mark.type === type);
  };

  /**
   * Check if the any of the currently selected blocks are of `type`.
   *
   * @param {String} type
   * @return {Boolean}
   */

  hasBlock = type => {
    const { value } = this.state;
    return value.blocks.some(node => node.type === type);
  };

  /**
   * Render a mark-toggling toolbar button.
   *
   * @param {String} type
   * @param {String} icon
   * @return {Element}
   */

  render() {
    return (
      <ul className="toolbar">
        <li className="toolbar_item bold">
          <button type="button">
            <FormatBold />
          </button>
        </li>
        <li className="toolbar_item italic">
          <button type="button">
            <FormatItalic />
          </button>
        </li>
        <li className="toolbar_item underline">
          <button type="button" className="underline">
            <FormatUnderlined />
          </button>
        </li>
        <li className="toolbar_item ">
          <button type="button" className="strikethrough">
            <FormatStrikethrough />
          </button>
        </li>
      </ul>
    );
  }
}

export default Toolbar;
