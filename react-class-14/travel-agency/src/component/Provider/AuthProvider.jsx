import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {


       const [user, setUser] = useState(null)
       const [loadung, setLoading] = useState(true)

       const createUser = (email, password) =>{
              setLoading(true)
              return createUserWithEmailAndPassword(auth, email, password)

       }

       const login = (email, password) =>{
              setLoading(true)
              return signInWithEmailAndPassword(auth, email, password)
       }
       
       const logOut = () =>{
              setLoading(true)
              return signOut(auth)
       }

       useEffect(() =>{
              const unsubscriber = onAuthStateChanged(auth, currentUser =>{
                     setUser(currentUser)
                     console.log("this is user", currentUser)
                     setLoading(false)
              })
              return () =>{
                     unsubscriber()
              }
       },[])



       const authInfo = { user, createUser, login, logOut,loadung };

       return (
              <AuthContext.Provider value={authInfo}>

                     {children}
                     
              </AuthContext.Provider>
       );
};

export default AuthProvider;