import App from './App.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { routes } from './pages/routes.tsx';
import { RouterProvider } from 'react-router';

ReactDOM.createRoot(document.getElementById("root")!).render(
      <RouterProvider router={routes} />
  )