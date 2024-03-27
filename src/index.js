import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css';
import Homepage from './pages/Homepage.js';
import Error from './pages/Error.js';
import Dashboard from './pages/Dashboard.js';
import Contact from './pages/Contact.js';
import Journal from './pages/Journal.js';
import Home from './pages/Home.js';
import AuthPage from './pages/AuthPage.js'
import Entries from './pages/Entries.js';

const router = createBrowserRouter([{
  path: '/',
  element: <Homepage />,
  errorElement: <Error />,
  children: [
    {
      path: '/Home',
      element: <AuthPage />
    },
    {
      path: '/Dashboard',
      element: <Dashboard />
    },
    {
      path: '/Journal',
      element: <Journal />
    },
    {
      path: '/Contact',
      element: <Contact />
    },
    {
      path: '/Entries',
      element: <Entries />
    }
  ]
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
