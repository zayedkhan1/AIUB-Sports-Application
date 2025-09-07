import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../firebase.init';
export const AuthContext=createContext();

const AuthProvider = ({children}) => {

    const createAccount=(email,password)=>{
        return createUserWithEmailAndPassword( auth,email,password);
      
    }
    const userLogin=(email,password)=>{
            return signInWithEmailAndPassword(auth,email,password);
    }

    
    // const userSingOut=()=>{
    //           return signOut(auth)
    // }

    const info={
        createAccount,
        userLogin,
        // userSingOut,

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;