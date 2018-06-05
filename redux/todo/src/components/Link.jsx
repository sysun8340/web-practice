import React from 'react';

export default ({ active, children, onLinkClick}) => {
  return active ? (
    <span>{children}</span>
  ) : (
    <a href="#"
      onClick={e => {
        e.preventDefault();
        onLinkClick();
      }}
    >{children}</a>
  );
}