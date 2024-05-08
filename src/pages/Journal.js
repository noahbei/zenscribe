import React, { useState } from "react";
import { auth, db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import Button from '../components/Button'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../components/PageTitle";

const Journal = () => {
  const notesStyle = {
    marginLeft: "200px",
    padding: "0 20px",
  };

  const formStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "3px",
    border: "1px solid #ccc",
    resize: "none",
  };

  const [note, setNote] = useState("");
  const [rating, setRating] = useState(0);

  function handleChange(event) {
    setNote(event.target.value);
  }

  function handleRatingChange(event) {
    if (
      parseInt(event.target.value) >= 0 &&
      parseInt(event.target.value) <= 10
    ) {
      setRating(parseInt(event.target.value));
    }
  }

  function getDate() {
    const date = new Date();

    const formatter = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      timeZoneName: "short",
    });
    const formattedDate = formatter.format(date);
    return formattedDate;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (auth.currentUser) {
      try {
        const docRef = await addDoc(collection(db, "notes"), {
          user: auth.currentUser.uid,
          note: note,
          createdAt: getDate(),
          rating: rating,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      setNote("");
      setRating(0);
    } else {
      toast("User not signed in");
    }
  }

  return (
    <div style={notesStyle} className={'container-style'}>
      <header>
        <PageTitle>Journal</PageTitle>
      </header>
      <main>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <form style={formStyle} onSubmit={handleSubmit}>
          <textarea
            style={{...inputStyle, fontSize: '20px'}}
            value={note}
            onChange={handleChange}
            placeholder="Type your journal entry here..."
            rows={20}
            autoFocus
            required
          />
          <input
            style={{...inputStyle, textAlign: 'center'}}
            onChange={handleRatingChange}
            placeholder="Rating (0-10)"
            type="number"
            min="0"
            max="10"
            value={rating}
            required
          />
          <Button style={inputStyle} type="submit">
            Submit
          </Button>
        </form>
      </main>
    </div>
  );
};

export default Journal;
