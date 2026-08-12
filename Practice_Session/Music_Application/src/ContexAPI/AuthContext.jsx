import React, { Children, createContext } from 'react'

export const AuthContextData = createContext();
    const AuthContext = ({children}) =>{
        const user = null;
    return (
    <AuthContextData.Provider value={user}>
        {children}
    </AuthContextData.Provider>
   
  )
}

export default AuthContext
