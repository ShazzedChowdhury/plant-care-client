import React, { createContext, useEffect, useState } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";
import { app } from '../../Firebase/firebase_config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    
    console.log(user)
    const createUser = (email, password ) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserInfo = (updatedInfo) => {
        return updateProfile(auth.currentUser, updatedInfo)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }

            setLoading(false)
        })

        return () => {           
            unSubscribe()            
        }
    }, [])

    const AuthInfo = {
      createUser,
      updateUserInfo,
    };
    return (
        <AuthContext value={AuthInfo}>
            { children }
        </AuthContext>
    );
};

export default AuthProvider;