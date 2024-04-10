import React from 'react';
import '../styles/EntryView.css';

const EntryView = ({ children, date, onClick }) => {
  const truncatedChildren = children.length > 350 ? children.slice(0, 350) + ". . ." : children;
  return (
    <div className="entry-view" onClick={onClick}>
      <div>{date}</div>
      <p>{truncatedChildren}</p>
    </div>
  );
}

export default EntryView;
