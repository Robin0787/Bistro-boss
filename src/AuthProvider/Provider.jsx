import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from "../Firebase/Firebase.init";

export const authContext = createContext(null);

const Provider = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth(app);

    // Creating user with email and password
    const signUpWithEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Login user with email and password
    const loginWithEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // login Or SignUp user with Google
    const continueWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    // Login Or SignUp user with Github
    const continueWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }
    // Logout the user
    const logOutUser = () => {
        return signOut(auth);
    }
    // send the password reset email to user
    const passReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    }
    // Setting the user when user logged in
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {user, setUser, loading, signUpWithEmailPass, loginWithEmailPass, continueWithGithub, continueWithGoogle, logOutUser, passReset};
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    )
};

export default Provider;