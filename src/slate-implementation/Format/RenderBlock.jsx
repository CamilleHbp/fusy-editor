function RenderBlock(props, editor, next) {
  switch (props.node.type) {
    default:
      return next();
  }
}

export default RenderBlock;
