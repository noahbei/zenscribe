import React from 'react';
import '../styles/EntryView.css';

const EntryView = ({ children }) => {
  return (
    <div className="entry-view">
      {children}
    </div>
  );
}

export default EntryView;
