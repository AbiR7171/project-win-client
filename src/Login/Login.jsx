import React, { createContext, useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';



const Login = () => { 

   
    const navigate = useNavigate();

 

      const handleForm = e =>{
         e.preventDefault();
         const   number = e.target.loginNumber.value;
         const  password = e.target.loginPin.value;
 
           console.log(number, password);
       
         axios.get(`https://win-bdt-server-new.vercel.app/userSignIn?number=${number}&password=${password}`)
         .then(res =>{
                     console.log(res.data);

                     if(res.data.name === number && res.data.password === password){
                        navigate(`/layout/${number}`)
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Login successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                     }else{
                         return Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Number or password wrong',
                           
                          })
                     }
         })
      }


    return (
       
             <div className='w-full h-[100vh] bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'>
            <div className='flex gap-2 justify-center items-center h-full'>

            <div  className="container mx-auto p-6 mt-12 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleForm}  className="space-y-4">
            <div className="w-full">
                <label  className="block text-sm font-medium text-gray-700">User Name</label>
                <input type="text" id="login-username" name="loginNumber" className="mt-1 p-2 w-full border rounded-md"/>
            </div>
            <div className="w-full">
                <label  className="block text-sm font-medium text-gray-700">Pin Number</label>
                <input type="password" id="login-pin" name="loginPin" className="mt-1 p-2 w-full border rounded-md"/>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Login</button>
        </form>
        <button  className="mt-4 text-blue-500 underline">Don't have an account? <Link to="/signUp">SignUp</Link></button>
    </div>


            </div>

       
        </div>

        
    );
};

export default Login;