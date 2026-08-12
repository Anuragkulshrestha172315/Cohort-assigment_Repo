import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import Favouite from "../Pages/Favouite";
import Artist from "../Pages/Artist";

const router = createBrowserRouter([
    {
        path : "/",
        element: <AuthLayout/>,
        children:[
            {
                path : "",
                element : <Login/>
            },
            {
                path : "register",
                element : <Register/>
            }

        ]
    },
    {
        path : "main",
        element : <MainLayouts/>,
        children:[
            {
                path:"",
                element: <Home/>
            },
            {
                path:"favouite",
                element: <Favouite/>
            },
            {
                path:"artist",
                element: <Artist/>
            }
        ]
    }
])

export default router;