import React, { useState, useEffect } from 'react';
import { auth, db } from '../config/firebase'
import { collection, query, where, getDocs } from "firebase/firestore";
import Button from '../components/Button';
import EntryView from '../components/EntryView';

const Entries = () => {
  const outerStyle = {
    marginLeft: "200px",
    padding: "0 20px"
  }

  const [entries, setEntries] = useState([]);
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
  useEffect(() => {
    if (auth.currentUser) {
      fetchData();
      console.log("data fetched")
    }
  }, []);
  
  return (
    <div style={outerStyle}>
      <header>
        <h1>Entries</h1>
      </header>
      <main>
        <Button onClick={fetchData}>Refresh</Button>
        <div>
          {entries.map(entry => (
            <EntryView date={entry.createdAt}>{entry.note}</EntryView>
            // key={entry.createdAt}
          ))}
        </div>
      </main>
    </div>
  );
}

export default Entries;