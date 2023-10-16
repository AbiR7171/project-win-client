import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Login from './Login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path:'/layout',
    element:<Layout></Layout>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Login>
  <RouterProvider router={router} />
  </Login>
  </React.StrictMode>,
)
