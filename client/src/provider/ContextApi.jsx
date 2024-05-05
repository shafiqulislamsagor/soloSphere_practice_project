import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { Auth } from "../../firebase.config";

export const ContextAll = createContext(null)


const ContextApi = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    const CreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const GoogleProvider = new GoogleAuthProvider();
    const GoogleUserCreate = () =>{
        setLoading(true)
        return signInWithPopup(Auth, GoogleProvider)
    }

    const UpdateUser = (name,photo) => {
        return updateProfile(Auth.currentUser, {
            displayName: name, photoURL:photo
        })
    }

    const LogoutUser = () =>{
        return signOut(Auth)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }

    }, [])

    const contextValue = { CreateUser, user, loading , LogoutUser, UpdateUser , GoogleUserCreate}
    return (
        <ContextAll.Provider value={contextValue}>{children}</ContextAll.Provider>
    );
};

export default ContextApi;