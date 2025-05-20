import React, { createContext, useEffect, useState } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { app } from '../../Firebase/firebase_config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);


    const createUser = (email, password ) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
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
        name: 'shazzed'
    }
    return (
        <AuthContext value={AuthInfo}>
            { children }
        </AuthContext>
    );
};

export default AuthProvider;