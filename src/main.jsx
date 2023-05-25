import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider >
    <RouterProvider router={Routes}/>
  </HelmetProvider>,
)
