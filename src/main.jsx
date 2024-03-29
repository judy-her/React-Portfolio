// import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '../src/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import About from './pages/About';
import Home from './pages/Home';
// import './index.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      //   {
      //     path: '/Blog',
      //     element: <Blog />,
      //   },
      //   {
      //     path: '/Contact',
      //     element: <Contact />,
      //   },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
