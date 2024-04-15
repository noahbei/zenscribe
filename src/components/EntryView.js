import React, { useState } from 'react';
import '../styles/EntryView.css';
import { child } from 'firebase/database';

const EntryView = ({ children, date, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  let truncatedChildren = children.length > 350 ? children.slice(0, 350) + ". . ." : children;
  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="entry-view" onClick={handleClick}>
      <div>{date}</div>
      <p>{isExpanded ? children : truncatedChildren}</p>
    </div>
  );
}

export default EntryView;
