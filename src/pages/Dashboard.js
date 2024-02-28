import React from 'react';

const Dashboard = () => {
  const dashboardStyle = {
    marginLeft: "200px",
    padding: "0 20px"
  }

  const dashboardContainer = {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridTemplateColumns: '2fr 2fr'
  }

  const calStyle = {
    gridColumnStart: '2',
    gridRowStart: '1',
    gridRowEnd: '-1'
  }
  return (
    <div style={dashboardStyle}>
      <header>
        <h1>Dashboard</h1>
      </header>
      <main>
        <div style={dashboardContainer}>
          <button>New Entry</button>
          <div style={calStyle}>calendar
          <img src="https://via.placeholder.com/500" alt="Placeholder" />
          </div>
          <div>
            <img src="https://via.placeholder.com/600x250" alt="Placeholder" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;