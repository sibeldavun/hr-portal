import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext();

export const AuthProvider =  ({children})=>{

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true" ? true : false)
    const [isHr, setIsHr] = useState(localStorage.getItem("isHr") === "true" ? true : false)

    useEffect(() => {
        localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn))
    },[isLoggedIn])

    useEffect(() => {
        localStorage.setItem("isHr", JSON.stringify(isHr))
    },[isHr])

    const values = {
        isLoggedIn,
        setIsLoggedIn,
        isHr,
        setIsHr
    };

    return(
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}

export default AuthContext;