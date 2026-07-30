import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Auth_Layouts from './Layouts/Auth_Layouts'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Main_Layouts from './Layouts/Main_Layouts'

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
            
        },
        {
            path:'mainLayout',
            element:<Main_Layouts/>
        }
    ])
  return <RouterProvider router={router} />
}

export default AppRoutes
