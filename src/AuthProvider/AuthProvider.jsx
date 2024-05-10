import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const gitHubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const creatUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser =(name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
             photoURL: photo
          })
    } 

    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = ()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const gitHubLogin = () =>{
        return signInWithPopup(auth, gitHubProvider)
    }
    const value = {
        creatUser,
        updateUser,
        loginUser,
        googleLogin,
        gitHubLogin,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;