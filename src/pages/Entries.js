import React, { useState, useEffect } from 'react';
import { auth, db } from '../config/firebase'
import { collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";
import Button from '../components/Button';
import EntryView from '../components/EntryView';
import PageTitle from '../components/PageTitle';

const Entries = () => {
  const outerStyle = {
    marginLeft: "200px",
    padding: "0 20px",
    padding: "0 20px",
    height: 'auto'
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

  const handleDelete = async (entryId) => {
    try {
      await deleteDoc(doc(db, "notes", entryId));
      fetchData();
      console.log("document deleted")
    } catch (error) {
      console.error('Error deleting entry: ', error);
    }
  };

  useEffect(() => {
    if (auth.currentUser) {
      fetchData();
      console.log("data fetched")
    }
  }, []);
  
  return (
    <div style={outerStyle} className={'container-style'}>
      <header>
        <PageTitle>Entries</PageTitle>
      </header>
      <main>
        <Button onClick={fetchData}>Refresh</Button>
        <ol style={{ listStyleType: 'none', padding: 0 }}>
          {entries.map(entry => (
            <li key={entry.createdAt}>
            <EntryView  date={entry.createdAt} rating={entry.rating} onDelete={() => handleDelete(entry.id)}>{entry.note}</EntryView>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}

export default Entries;