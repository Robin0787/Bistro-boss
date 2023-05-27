import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import Provider from './AuthProvider/Provider.jsx';
import Routes from './Routes/Routes.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <Provider><RouterProvider router={Routes}/><Toaster /></Provider>
  </HelmetProvider>,
)
