import React from 'react';

const Notes = () => {
  const notesStyle = {
    marginLeft: "200px",
    padding: "0 20px"
  }

  return (
    <div style={notesStyle}>
      <header>
        <h1>Notes</h1>
      </header>
      <main>
        <p>enter notes here</p>
      </main>
    </div>
  );
}

export default Notes;