import React, { useState } from 'react';
import { auth, db } from "../config/firebase"
import { collection, addDoc } from "firebase/firestore";

const Journal = () => {
  const notesStyle = {
    marginLeft: "200px",
    padding: "0 20px"
  }

  const textareaStyle = {
    resize: "none"
  }

  const [note, setNote] = useState('')
  const [rating, setRating] = useState(0)

  function handleChange(event) {
    setNote(event.target.value);
  }

  function handleRatingChange(event) {
    if (parseInt(event.target.value) >= 0 && parseInt(event.target.value) <= 10) {
      setRating(event.target.value)
    }
  }

  function getDate() {
    const date = new Date();

    const formatter = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
      timeZoneName: 'short'
    });
    const formattedDate = formatter.format(date);
    return formattedDate;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "notes"), {
        user: auth.currentUser.uid,
        note: note,
        createdAt: getDate(),
        rating: rating
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setNote('')
    setRating(0)
  }

  return (
    <div style={notesStyle}>
      <header>
        <h1>Journal</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <textarea style={textareaStyle}
            value={note}
            onChange={handleChange}
            placeholder="Type your journal entry here..."
            rows={20}
            cols={100}
            autoFocus
            required
          />
          <input onChange={handleRatingChange} placeholder="ratin" type="number" name="quantity" min="0" max="10" required/>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default Journal;