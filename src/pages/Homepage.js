import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';

function Homepage() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Homepage;