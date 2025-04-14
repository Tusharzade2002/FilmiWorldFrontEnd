import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from './Views/Home/Home.js'
import Films from './Views/Films/Films.js'
import Addfilms from './Component/AddFilms/Addfilms.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
 
const router =createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/films:id",
    element:<Films/>
  },
  {
   path:"/add-film",
   element:<Addfilms />
  }
  
]);
root.render(<RouterProvider router={router} />)

