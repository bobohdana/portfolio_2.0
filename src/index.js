import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';

import App from './App';
import { ROUTES } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/portfolio_2.0",
    element: <App />,
    children: ROUTES.map(nav => ({
      path: nav.key,
      element: <nav.Component />,
    }))
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
