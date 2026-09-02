import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from './Context/AuthContext'

const ProtectRoute = () => {
    let {login} = useContext(Auth)
    if(!login){
        return <Navigate to={'/'}/>
    }
  return (

    <Outlet/>
  )
}

export default ProtectRoute
