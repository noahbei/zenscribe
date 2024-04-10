import React from 'react';
import '../styles/EntryView.css';

const EntryView = ({ children, date, onClick }) => {
  const truncatedChildren = children.slice(0, 100);
  return (
    <div className="entry-view" onClick={onClick}>
      <div>{date}</div>
      <p>{truncatedChildren}</p>
    </div>
  );
}

export default EntryView;
