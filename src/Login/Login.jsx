import React, { createContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const Login = () => {
    const navigate = useNavigate();
    const numberRef = useRef();
    const [moNumber, setNumber]=useState()

    const handleNumber = () => {
        const number = numberRef.current.value;
        setNumber(number)
        console.log(number.length);
        if (number.length == 11) {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Login Successfully',
                showConfirmButton: false,
                timer: 1500
            });
            navigate(`/layout/${numberRef.current.value}`);

        } else {
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Please Use Valid Number',
                showConfirmButton: false,
                timer: 1500
              });
        }


    }
    return (
       
             <div className='w-full h-[100vh] bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'>
            <div className='flex gap-2 justify-center items-center h-full'>

                <input ref={numberRef} type="number" placeholder="Enter Your Mobile Number" className="input input-bordered input-secondary w-full max-w-xs" />
                <button onClick={handleNumber} className='bg-gradient-to-r from-red-500 to-red-800  p-3 px-10 text-white rounded'>Login</button>


            </div>

       
        </div>

        
    );
};

export default Login;