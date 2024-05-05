import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Calendar from '../components/Calendar';
import WeeklyCalendar from '../components/WeeklyCalendar';
import { NavLink } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from '../config/firebase';
import PageTitle from '../components/PageTitle';

const Dashboard = () => {
  const dashboardStyle = {
    marginLeft: "200px",
    padding: "0 20px"
  }

  const dashboardContainer = {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridTemplateColumns: '2fr 2fr',
    gap: '40px'
  }

  const calStyle = {
    gridColumnStart: '2',
    gridRowStart: '1',
    gridRowEnd: '-1',
    display: 'flex',
    alignItems: 'center'
  }
  
  const buttonStyle = {
    width: '100%',
    height: '100%'
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
      console.log("data fetched");
    }
  }, []);

  return (
    <div style={dashboardStyle} className={'container-style'}>
      <header>
        <PageTitle>Dashboard</PageTitle>
      </header>
      <main>
        <div style={dashboardContainer}>
          <NavLink to={'/Home/journal'}>
            <Button style={buttonStyle}>New Entry</Button>
          </NavLink>
          <div style={calStyle}>
            <Calendar/>
          </div>
          <div>
            <WeeklyCalendar entries={entries}/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;