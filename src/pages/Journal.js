import React, { useState } from 'react';

const Journal = () => {
  const notesStyle = {
    marginLeft: "200px",
    padding: "0 20px"
  }

  const textareaStyle = {
    resize: "none"
  }

  const barStyle = {
    display: "flex",
    justifyContent: "space-around"
  }

  const elemStyle = {
    width: "200px"
  }

  const [note, setNote] = useState('')

  function handleChange(event) {
    setNote(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(note)
    setNote('')
  }

  return (
    <div style={notesStyle}>
      <header>
        <h1>Journal</h1>
      </header>
      <main>
        <div style={barStyle}>
          <div style={elemStyle}>Hint Stuff</div>
          <div style={elemStyle}>Rate your day</div>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea style={textareaStyle}
            value={note}
            onChange={handleChange}
            placeholder="Type your journal entry here..."
            rows={20}
            cols={100}
            autoFocus
          />
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default Journal;