import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.Config";

const googleProvider = new GoogleAuthProvider()
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

       const [user, setUser] = useState(null)
       const [loading, setLoading] = useState(true)


       const createUser = (email, password) =>{
              setLoading(true)
              return createUserWithEmailAndPassword(auth, email, password)
       }

       const login = (email, password) =>{
              setLoading(true)
              return signInWithEmailAndPassword(auth, email, password)
       }

       const logOut = () =>{
              signOut(auth)
       }

       const googleLogin = () =>{
              setLoading(true)
              return signInWithPopup(auth, googleProvider)
       }

       useEffect(() => {

              const unsubscribe = onAuthStateChanged(auth, currentUser =>{
                     setUser(currentUser)
                     console.log("this is user", currentUser)
                     setLoading(false)
              })
              return (() =>{
                     unsubscribe()
              })
       
       },[])



       const authInfo = {
         createUser,
         user,
         login,
         loading,
         logOut,
         googleLogin,
       };

       return (
              <AuthContext.Provider value={authInfo}>
                     {children}
                     
              </AuthContext.Provider>
       );
};

export default AuthProvider;