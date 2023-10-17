import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Login from './Login/Login';
import Home from './Componets/Home/Home';
import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path:'/layout/:id',
    element:<Home/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 

   <QueryClientProvider client={queryClient}>
 
  <RouterProvider router={router} /> 

  </QueryClientProvider>
 
  </React.StrictMode>,
)
