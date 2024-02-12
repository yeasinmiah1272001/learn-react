import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Error from "./component/Error/Error";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Services from "./component/Services/Services";
import ServiceDetails from "./component/Home/ServiceDetails";
import DoctorsDetails from "./component/Doctors/DoctorsDetails";
import Appointment from "./component/Appointment/Appointment";
import Register from "./component/Register/Register";
import AuthProvider from "./component/firebase/Provider/AuthProvider";
import PrivateRoute from "./component/firebase/PrivateRoute/PrivateRoute";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/service",
        element: <Services></Services>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/appoint/:id",
        element: <DoctorsDetails></DoctorsDetails>,
        loader: () => fetch("/doctors.json"),
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
        loader: () => fetch("/doctors.json"),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);
