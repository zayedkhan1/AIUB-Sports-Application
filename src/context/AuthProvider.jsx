import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.init';
export const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createAccount=(email,password)=>{
        return createUserWithEmailAndPassword( auth,email,password);
      
    }
    const userLogin=(email,password)=>{
            return signInWithEmailAndPassword(auth,email,password);
    }

    const userSingOut=()=>{
              return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,user=>{
            setUser(user);
            console.log('auth state change',user);
            setLoading(false);
        })

        return () =>{ unsubscribe()};
    },[]);

    const info={
        createAccount,
        userLogin,
        userSingOut,
        user,
        loading,

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;