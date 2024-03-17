import {
    createBrowserRouter,
  } from "react-router-dom";


import Main from "../Layout/Main";
import Home from "../Layout/Pages/Home/Home/Home";
import Menu from "../Layout/Pages/Menu/Menu/Menu";
import Order from "../Layout/Pages/Order/Order/Order";
import Login from "../Layout/Pages/Login/Login";
import SignUp from "../Layout/Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Layout/Pages/Shared/Secret/Secret";


import Dashboard from "../Layout/Dashboard";
import Cart from "../Layout/Pages/Dashboard/Cart/Cart";
import AllUsers from "../Layout/Pages/Dashboard/AllUsers/AllUsers";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path:"menu",
          element:<Menu></Menu>
        },
       {
        path: 'order/:category',
        element:<Order></Order>
       },
       {
        path:"login",
        element:<Login></Login>
       },
       {
        path: 'signup',
        element:<SignUp></SignUp>
       },
       {
        path: 'secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
      ]
    },

    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>, 
      children: [
        {
          path: "cart", 
          element:<Cart></Cart>
        },
           // admin routes
           {
            path: 'users',
            element: <AllUsers></AllUsers>
          }


      ]
    }
  ]);