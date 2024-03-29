import React from 'react';
import Button from '../components/Button';
import Calendar from '../components/Calendar';
import WeeklyCalendar from '../components/WeeklyCalendar';

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
  return (
    <div style={dashboardStyle}>
      <header>
        <h1>Dashboard</h1>
      </header>
      <main>
        <div style={dashboardContainer}>
          <Button>New Entry</Button>
          <div style={calStyle}>
            <Calendar/>
          </div>
          <div>
            <WeeklyCalendar/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;