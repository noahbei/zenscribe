import React from 'react';

const Home = () => {
  const dashboardStyle = {
    marginLeft: "200px",
    padding: "0 20px"
  }

  return (
    <div style={dashboardStyle}>
      <header>
        <h1>Home</h1>
      </header>
      <main>
        <p>Home page info here</p>
      </main>
    </div>
  );
}

export default Home;