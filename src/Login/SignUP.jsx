import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const SignUP = () => { 

    const navigate = useNavigate()


    const handleForm = e =>{
          e.preventDefault();
          const form = e.target;

          const name = form.signupUsername.value;
          const number = form.accountNumber.value;
        
          const password = form.pin.value;
          const confirmPassword = form.confirmPin.value;


          if(confirmPassword !== password){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Confirm password didn't match",
              })
          } 

          const isValid =/^(?=.*[0-9])/.test(name);

          console.log(isValid);

          if(!isValid){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Name already taken. Add some number",
              })
          }


          axios.post("https://win-bdt-server-new.vercel.app/users", {
             name,
             number,
             password
          })
          .then(res =>{ 
                   
                   console.log(res.data);
                   if(res.data.insertedId){
                    navigate(`/authentication/${name}`)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'SignUp successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                   }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: "Already have an account",
                      })
                   }
                   
          })
         
          
       


    }
    return (
        <div className='bg-blue-500 h-full p-2'>
         
                                 <div  className="container mx-auto p-6 mt-12 bg-white shadow-md rounded-lg ">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleForm} className="space-y-4">
            <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">User Name</label>
                <input type="text"  name="signupUsername" className="mt-1 p-2 w-full border rounded-md"/>
            </div>
            <div className="w-full">
                <label  className="block text-sm font-medium text-gray-700">Account Number</label>
                <input type="text"  name="accountNumber" className="mt-1 p-2 w-full border rounded-md"/>
            </div>
            <div className="w-full">
               
            </div>
            <div className="w-full">
                <label  className="block text-sm font-medium text-gray-700">Pin Number</label>
                <input type="password" name="pin" className="mt-1 p-2 w-full border rounded-md"/>
            </div>
            <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">Confirm Pin</label>
                <input type="password"  name="confirmPin" className="mt-1 p-2 w-full border rounded-md"/>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Register</button>
        </form>
        <button  className="mt-4 text-blue-500 underline">Already have an account? <Link to="/">Login</Link></button>
    </div>

        </div>
    );
};

export default SignUP;