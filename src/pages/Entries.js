import React, { useState, useEffect } from 'react';
import { auth, db } from '../config/firebase'
import { collection, query, where, getDocs } from "firebase/firestore";

const Entries = () => {
  const outerStyle = {
    marginLeft: "200px",
    padding: "0 20px"
  }

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "notes"), where("user", "==", auth.currentUser.uid));
        const querySnapshot = await getDocs(q);
        const entriesData = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        setEntries(entriesData);
      } catch (error) {
        console.error('Error fetching entries: ', error);
      }
    };

    if (auth.currentUser) {
      fetchData();
    }
  }, [auth.currentUser]);
  
  return (
    <div style={outerStyle}>
      <header>
        <h1>Entries</h1>
      </header>
      <main>
        <ul>
          {entries.map(entry => (
            <li key={entry.createdAt}>{entry.note}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Entries;