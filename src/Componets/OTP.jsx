import React, { useEffect, useState } from 'react';
import firebase from "firebase/compat/app"
import { onAuthStateChanged } from 'firebase/auth';
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { useNavigate } from 'react-router-dom';
import useUsers from './Hooks/useUsers';

const OTP = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyB2J0EV51vnUUd3OovjUxwBoSHpOEJOukE",
        authDomain: "winbdt-client.firebaseapp.com",
        projectId: "winbdt-client",
        storageBucket: "winbdt-client.appspot.com",
        messagingSenderId: "525469868858",
        appId: "1:525469868858:web:5c792bfdb2b2f119b92603"
      };
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);


       const[user, setUser]=useState(null);
       const navigate = useNavigate()
      const[users]=useUsers()
      console.log(users);
       useEffect(()=>{
           
                const unSubscribe = onAuthStateChanged(firebase.auth(), (currentUser)=>{
                     console.log(currentUser);
                    
                     setUser(currentUser)
                });

                return ()=> unSubscribe()
       },[]);


       useEffect(()=>{
                  const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());

                   ui.start(".otp-container", {
                            signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
                            signInSuccessUrl: `/layout/${users?.name}`,
                   })
       },[])
    return (
        <div className=' otp-container mt-10'>
                   
        </div>
    );
};

export default OTP;