import React, { useContext, useState } from 'react';
// import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/images/logo.webp"
import { Icon } from '@iconify/react';
import moment from 'moment';

const SignUP = () => { 

    const [error, setError]=useState()
    const [show1, setShow1]=useState(false);
    const [show2, setShow2]=useState(false);

    const navigate = useNavigate()


    const handleForm = e =>{
          e.preventDefault();
          const form = e.target;

          const name = form.signupUsername.value;
          const number = form.accountNumber.value;
        
          const password = form.pin.value;
          const confirmPassword = form.confirmPin.value;


          const trimName = name.trim()
          console.log(trimName);


          if(confirmPassword !== password){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Confirm password didn't match",
              })
          } 

       
          const isPasswordvalid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password);

          console.log(isPasswordvalid);

          if(!isPasswordvalid){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "password must be contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:",
              })
          }

        

       

          axios.post("https://win-bdt-server-new.vercel.app/users", {
             name :trimName,
             number,
             password,
             date:moment().format("DD/MM/YYYY")
          })
          .then(res =>{ 
                   
                   console.log(res.data);
                   if(res.data.insertedId){
                    navigate(`/layout/${name}`)
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
                name='signupUsername'
                type="input"
                autoCapitalize="off"
                autoCorrect="off"
                placeholder="User Name"
                
              />
            </div>
            <div className="form-group flex">
           <div className="bg-black w-12 h-12 rounded flex justify-center items-center">
           <Icon icon="la:mobile" className="text-white "/>
           </div>
              <input
                className="form-control w-full"
                maxLength={20}
                name='accountNumber'
                type="input"
                autoCapitalize="off"
                autoCorrect="off"
                placeholder="User Number"
                
              />
            </div>
            <div className="form-group flex">
           <div className="bg-black w-12 h-12 rounded flex justify-center items-center">
          <Icon icon="ph:lock-fill" className="text-white "/>
           </div>
              <input
                className="form-control w-full"
                maxLength={20}
                name='pin'
                type={`${show1 ? "input": "password"}`}
                autoCapitalize="off"
                autoCorrect="off"
                placeholder="Password"
                
              />
         {
             show1 ?  <Icon onClick={()=>setShow1(!show1)}  icon="mdi:eye-off-outline" className='absolute end-2 mt-3 text-2xl  text-black' /> :
             <Icon onClick={()=>setShow1(!show1)} icon="pepicons-pencil:eye" className='absolute end-2 mt-3 text-2xl  text-black' />
           }
            </div>

            <div className="form-group flex">
            <div className="bg-black w-12 h-12 rounded flex justify-center items-center">
           <Icon icon="ph:lock-fill" className="text-white "/>
           </div>
              <input
                className="form-control w-full"
                name='confirmPin'
                type={`${show2 ? "input": "password"}`}
                autoCapitalize="off"
                autoCorrect="off"
                placeholder="Confirm password"
                
              />
             {
             show2 ?  <Icon onClick={()=>setShow2(!show2)}  icon="mdi:eye-off-outline" className='absolute end-2 mt-3 text-2xl  text-black' /> :
             <Icon onClick={()=>setShow2(!show2)} icon="pepicons-pencil:eye" className='absolute end-2 mt-3 text-2xl text-black' />
           }
            </div>
          </div>
          <div className="button-area mt-4">
            <button
              className="btn-primar w-full bg-green-600"
              type="submit"
              value="submit"
              
            >
              Submit
            </button>
          {
            error &&   <div className="txt-error" style={{}}>
            <p className="" id="errorMsg" style={{}}>
              {error}
              <br />
            </p>
          </div>
          }
            <Link to="/">
            <button
              className="btn-primary w-full "
          
            >
              Login
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

export default SignUP;