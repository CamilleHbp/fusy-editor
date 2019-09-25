import * as Hotkeys from '../../Constants/Hotkeys';

function MarkHotkey(options) {
  const { key, type, modkey } = options;

  // Return our "plugin" object, containing the `onKeyDown` handler.
  return {
    onKeyDown(event, editor, next) {
      // If it doesn't match our `key`, let other plugins handle it.
      if (event.ctrlKey && modkey === Hotkeys.ctrlModKey) console.log('Prout!');
      if (
        !(event.ctrlKey && modkey === Hotkeys.ctrlModKey) ||
        !(event.altKey && modkey === Hotkeys.altModKey) ||
        !(event.shiftKey && modkey === Hotkeys.shiftModKey) ||
        !(event.metaKey && modkey === Hotkeys.metaModKey) ||
        event.key !== key
      ) {
        return next();
      }

      console.log('Prout!');
      // Prevent the default characters from being inserted.
      event.preventDefault();

      // Toggle the mark `type`.
      editor.toggleMark(type);
      return true;
    }
  };
}

export default MarkHotkey;
