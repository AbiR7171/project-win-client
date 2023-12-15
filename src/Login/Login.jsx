import React, { createContext, useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import logo from "../assets/images/logo.webp"
import { Icon } from '@iconify/react';



const Login = () => { 

   const [error, setError]=useState();
   const [show, setShow]=useState(false);
   
   
    const navigate = useNavigate();

 

      const handleForm = e =>{
         e.preventDefault();
         const   number = e.target.loginNumber.value;
         const  password = e.target.loginPin.value;

          if(number === ""){
               setError("user Name is empty")
          }

          if(password === ""){
            setError("password is empty")
          }
 
           console.log(number, password);
       
         axios.get(`https://win-bdt-server-new.vercel.app/userSignIn?number=${number}&password=${password}`)
         .then(res =>{
                     console.log(res.data);

                     const findData = res.data;

                     const users = findData?.find(u => {
                        return  u.name == number && u.password == password
                     })

                     console.log(users);

                     if(users){
                        navigate(`/layout/${number}`)
                    
                     }else{
                         return Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Name or password wrong',

                           
                          })
                     }
         })
      }


    return (
       
      <div className="loginBg">
      <div className="main flex flex-col items-center justify-center">
      <header className="page-header">
        <div className="header-logo">
        <a href="https://www.winbdt.com/"><img src={logo} alt="" /></a>
        </div>
      </header>
      <form onSubmit={handleForm} className="login-box">
        <div className="form-login">
          <div className="form-group flex">
         <div className="bg-black w-12 h-12 rounded flex justify-center items-center">
         <Icon icon="zondicons:user" className="text-white "/>
         </div>
            <input
              className="form-control w-full"
              maxLength={20}
              name='loginNumber'
              type="input"
              autoCapitalize="off"
              autoCorrect="off"
              placeholder="Login Name"
              
            />
          </div>
          <div className="form-group flex">
          <div className="bg-black w-12 h-12 rounded flex justify-center items-center">
         <Icon icon="ph:lock-fill" className="text-white "/>
         </div>
            <input
              className="form-control w-full"
              name='loginPin'
              type={`${show ? "input": "password"}`}
              autoCapitalize="off"
              autoCorrect="off"
              placeholder="Password"
              
            />
           {
             show ?  <Icon onClick={()=>setShow(!show)}  icon="mdi:eye-off-outline" className='absolute end-2 mt-3 text-2xl  text-black' /> :
             <Icon onClick={()=>setShow(!show)} icon="pepicons-pencil:eye" className='absolute end-2 mt-3 text-2xl text-black' />
           }
          </div>
        </div>
        <div className="button-area mt-4">
          <button
            className="btn-primary w-full"
            type="submit"
            value="submit"
            
          >
            Login
          </button>
          {
            error &&   <div className="txt-error" style={{}}>
            <p className="" id="errorMsg" style={{}}>
              {error}
              <br />
            </p>
          </div>
          }
          <Link to="/signup">
          <button
            className="btn-primar w-full bg-green-600 "
        
          >
            Register
          </button>
          </Link>
        </div>
        <footer className="txt-support">
          <span className="txt">
            Our platform is most compatible with: Google Chrome / Safari
          </span>
        </footer>
      </form>
    </div>
    
    
      </div>

        
    );
};

export default Login;