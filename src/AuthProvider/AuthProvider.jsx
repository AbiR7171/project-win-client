import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.confiq';


export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const auth = getAuth(app);




    const handleCreateUser = (email, password)=>{
         return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }






    const authInfo = {
        handleCreateUser,
        handleLogin
    }
    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;