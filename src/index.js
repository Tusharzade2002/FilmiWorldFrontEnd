import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from './Views/Home/Home.js'
import Films from './Views/Films/Films.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
 
const router =createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/films",
    element:<Films/>
  },
  
]);
root.render(<RouterProvider router={router} />)

