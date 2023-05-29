import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
// import 'sweetalert2/src/sweetalert2.scss';
import Provider from './AuthProvider/Provider.jsx';
import Routes from './Routes/Routes.jsx';
import './index.css';
// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Routes} />
      </QueryClientProvider>
      <Toaster />
    </Provider>
  </HelmetProvider>,
)
