import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createHashRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import './styles/index.css';
import './styles/media.css';

import App from './App';
import { ROUTES } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="home" replace /> },
      ...ROUTES.map(nav => ({
        path: nav.key,
        element: <nav.Component />,
      }))
    ]
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
