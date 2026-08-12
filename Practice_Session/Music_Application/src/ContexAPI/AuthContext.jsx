import React, { Children, createContext } from 'react'

export const AuthContextData = createContext();
    const AuthContext = ({children}) =>{


        const registerUser = (newUser) =>{
            const users = JSON.parse(localStorage.getItem("users") ||"[]");

            const alreadyExist = users.find((users) => {
                return users.email === newUser.email
            })
            if(alreadyExist){
                return {
                    success : false, 
                    message: "user already exist"
                }
            }

            const UpdateUser = [...users, newUser]
            localStorage.setItem("users", JSON.stringify(UpdateUser))
            return {
                success : true,
                message: "user Add Successfully"
            }
            
        }

    return (
    <AuthContextData.Provider value={registerUser}>
        {children}
    </AuthContextData.Provider>
   
  )
}

export default AuthContext
