import {createBrowserRouter } from "react-router-dom"
import Layout from "../Components/LayoutHolder/Layout"
import Homescreen from "../Pages/Homescreen"
import Login from "../Pages/Login"
import Signin from "../Pages/Signin"
import Dashboard from "../Pages/Dashboard/DashHeader"
import DashboardLayout from "../Pages/Dashboard/DashboardLayout"
import UserHome from "../Pages/Dashboard/UserHome"

export const Mainrouter =  createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Homescreen />
                }
            ]
        },  
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/signin",
            element: <Signin/>
        }, 
        {
            path: "/dashboard",
            element: <DashboardLayout/>,
            children: [
                {
                    index: true,
                    element: <UserHome />
                }
            ]
        },     
    ]       
)