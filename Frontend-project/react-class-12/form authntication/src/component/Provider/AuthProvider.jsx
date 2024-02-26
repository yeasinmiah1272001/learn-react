import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null)
const googleProvder = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

       const [user, setUser] = useState(null)
       const [loading, setLoading] = useState(true)

       const createUser = (email, passsword) =>{
              setLoading(true)
              return createUserWithEmailAndPassword(auth, email, passsword)

       }

       const login = (email, password) =>{
               setLoading(true);
              return signInWithEmailAndPassword(auth, email, password)
       }

       const logOut = () =>{
               setLoading(true);
              return signOut(auth)
       }

       const googleSignIn = () =>{
             return signInWithPopup(auth, googleProvder)
       }

       useEffect(() =>{
              const unsubscrive = onAuthStateChanged(auth, currentUser =>{
                     setUser(currentUser)
                     console.log("this is user", currentUser)
                     setLoading(false)
              })
              return () =>{
                     unsubscrive()
                      
              }
       },[])




       const authInfo = {
         createUser,
         user,
         login,
         logOut,
         loading,
         googleSignIn,
       };

       return (
              <AuthContext.Provider value={authInfo}>
                     {children}
              </AuthContext.Provider>
       );
};

export default AuthProvider;