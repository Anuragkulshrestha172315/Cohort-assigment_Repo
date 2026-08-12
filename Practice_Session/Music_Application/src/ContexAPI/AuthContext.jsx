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

        const loginUser = (email, password) => {
            const users = JSON.parse(localStorage.getItem('users') || "[]");

            const alreadyExist = users.find((user)=>{
                return user.email === email && user.password === password
            })

            if(alreadyExist){
                
                    localStorage.setItem("currentUser", JSON.stringify(alreadyExist));
                    return {
                        success : true,
                        message : "Login Successfully",
                        user : alreadyExist

                    }
                
            }else{
                return{
                    success : false,
                    message: "Invalid Credential"
                }    
            }

        }

    return (
    <AuthContextData.Provider value={{registerUser, loginUser}}>
        {children}
    </AuthContextData.Provider>
   
  )
}

export default AuthContext
