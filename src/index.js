import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css';
import Homepage from './pages/Homepage.js';
import Error from './pages/Error.js';
import Dashboard from './pages/Dashboard.js';
import Notes from './pages/Notes.js';
import Contact from './pages/Contact.js';

const router = createBrowserRouter([{
  path: '/',
  element: <Homepage />,
  errorElement: <Error />,
  children: [
    {
      path: '/Dashboard',
      element: <Dashboard />
    },
    {
      path: '/Notes',
      element: <Notes />
    },
    {
      path: '/Contact',
      element: <Contact />
    }
  ]
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
