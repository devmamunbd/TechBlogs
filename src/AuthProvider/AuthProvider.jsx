/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import { createContext } from "react"

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const [user, setUser]= useState(null)
const [loading, setLoading]= useState(true)



const userInfo = {}
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider