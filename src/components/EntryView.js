import React, { useState } from 'react';
import '../styles/EntryView.css';

const EntryView = ({ children, date, rating, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  let truncatedChildren = children.length > 350 ? children.slice(0, 350) + ". . ." : children;
  const truncatedDate = date.split(' at')[0]

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between"
  }

  const ratingStyle = {
    paddingRight: "20px"
  }
  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="entry-view" onClick={handleClick}>
      <div style={headerStyle}>
        <div>{truncatedDate}</div>
        <div style={ratingStyle}>Entry Rating: {rating}</div>
      </div>
      <p>{isExpanded ? children : truncatedChildren}</p>
    </div>
  );
}

export default EntryView;
