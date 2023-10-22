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
import SignUP from './Login/SignUP';
import AuthProvider from './AuthProvider/AuthProvider';
import OTP from './Componets/OTP';


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
  },
  {
    path:"/signUp",
    element:<SignUP/>
  },
  {
    path:"/authentication/:id",
    element:<OTP/>
  }
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 

   <QueryClientProvider client={queryClient}>
 
  <AuthProvider>
  <RouterProvider router={router} /> 

  </AuthProvider>
  </QueryClientProvider>
 
  </React.StrictMode>,
)
