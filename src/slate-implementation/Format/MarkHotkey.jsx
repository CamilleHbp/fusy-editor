import * as Hotkeys from '../../constants/Hotkeys';

function MarkHotkey(options) {
  const { key, type, modKey } = options;

  const isModKey = event => {
    if (
      (event.ctrlKey && modKey === Hotkeys.ctrlModKey) ||
      (event.altKey && modKey === Hotkeys.altModKey) ||
      (event.shiftKey && modKey === Hotkeys.shiftModKey) ||
      (event.metaKey && modKey === Hotkeys.metaModKey)
    ) {
      return true;
    }
    return false;
  };

  // Return our "plugin" object, containing the `onKeyDown` handler.
  return {
    onKeyDown(event, editor, next) {
      if (!isModKey(event) || event.key !== key) {
        // If it doesn't match our `key`, let other plugins handle it.
        return next();
      }
      // Prevent the default characters from being inserted.
      event.preventDefault();
      // Toggle the mark `type`.
      editor.toggleMark(type);
      return true;
    }
  };
}

export default MarkHotkey;
