import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Auth_Layouts from './Layouts/Auth_Layouts'
import Login from './Pages/Login'
import Register from './Pages/Register'

const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path:"/",
            element:<Auth_Layouts/>,
            children:[
                {
                    path:"/login",
                    element: <Login/>
                },
                {
                    path:"/register",
                    element: <Register/>
                }
            ]
            
        }
    ])
  return <RouterProvider router={router} />
}

export default AppRoutes
