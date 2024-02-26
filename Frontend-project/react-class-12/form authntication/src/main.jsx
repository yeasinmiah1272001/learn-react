import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Error from "./component/Error/Error";
import Home from "./component/Home/Home";
import Register from "./component/Register/Register";
import AuthProvider from "./component/Provider/AuthProvider";
import Login from "./component/Login/Login";
import Hero from "./component/Hero/Hero";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Profile from "./component/Profile/Profile";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/hero",
        element: (
          <PrivateRoute>
            <Hero></Hero>
          </PrivateRoute>
        ),
      },
      {
        path:"/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
