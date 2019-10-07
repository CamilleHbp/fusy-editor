import React from 'react';
import './ToolbarButton.scss';

function ToolbarButton({ isActive, type, icon, onClick }) {
  const activeClass = `toolbar-button--${isActive ? 'active' : 'inactive'}`;
  const Icon = icon;
  return (
    <button
      type="button"
      className={`toolbar-button ${activeClass}`}
      onMouseDown={event => onClick(event, type)}
    >
      <Icon className="toolbar-button_icon" />
    </button>
  );
}

export default ToolbarButton;
