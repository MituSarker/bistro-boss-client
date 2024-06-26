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

import AdminRoute from "./AdminRoute";
import AddItems from "../Layout/Pages/Dashboard/AddItems/AddItems";
import AllUsers from "../Layout/Pages/Dashboard/AllUsers/AllUsers";
import Cart from "../Layout/Pages/Dashboard/Cart/Cart";
import ManageItems from "../Layout/Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Layout/Pages/Dashboard/UpdateItem/UpdateItem";





  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
          path: 'menu', 
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
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
        // normal user routes
        {
          path: 'cart',
          element:<Cart></Cart>
        },
        // admin only routes
        {
          path: 'addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path: 'users',
          element: <AllUsers></AllUsers>
        }
  ]
}
  ]);