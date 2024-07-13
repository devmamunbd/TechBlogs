/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { useEffect, useState } from "react"
import { createContext } from "react"
import { auth } from './../../firebase.init';

const googleProvider = new GoogleAuthProvider()
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const [user, setUser]= useState(null)
const [loading, setLoading]= useState(true)



// register 
const CreateUser = (email, password)=> {
  setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)

}

//LoginUser
const LoginUser = (email, password)=> {
  setLoading(true)
  return signInWithEmailAndPassword( auth,email, password)
}

// googleLogin
const GoogleLogin=()=> {
  setLoading(true)
  return signInWithPopup(auth, googleProvider)
}


const updateUserProfile=(name, photo)=> {
  setLoading(true)
  return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
  })
}

//logOut
const LogOut =()=> {
    signOut(auth)
}


//manageUser
useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log("Current User",currentUser)
      setLoading(false)
    })
    return() => {
      return unSubscribe()
    }
},[])


const authInfo = {user, loading,CreateUser, LoginUser, GoogleLogin,LogOut, updateUserProfile}
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider