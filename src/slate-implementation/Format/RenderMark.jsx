import React from 'react';

function RenderMark(props, editor, next) {
  const { children, mark, attributes } = props;

  switch (mark.type) {
    case 'bold':
      return <strong {...attributes}>{children}</strong>;
    case 'code':
      return <code {...attributes}>{children}</code>;
    case 'italic':
      return <em {...attributes}>{children}</em>;
    case 'underline':
      return <u {...attributes}>{children}</u>;
    case 'strikethrough':
      return <del {...attributes}>{children}</del>;
    default:
      return next();
  }
}

export default RenderMark;
