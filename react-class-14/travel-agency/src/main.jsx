import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Error from "./component/Error/Error";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import AuthProvider from "./component/Provider/AuthProvider";
import Registration from "./component/Registration/Registration";
import Locations from "./component/Locations/Locations";

import PropertyLists from "./component/PropertyLists/PropertyLists";
import Feature from "./component/Feature/Feature";
import Contact from "./component/Contact/Contact";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Details from "./component/PropertyLists/Details";
import Pricing from "./component/PropertyLists/Pricing";
import LocationDetails from "./component/Locations/LocationDetails";




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
        path: "/service",
        element: (
          <PrivateRoute>
            <Locations></Locations>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <PropertyLists></PropertyLists>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <Feature></Feature>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () => fetch("/list.json"),
      },
      {
        path: "/pricing",
        element: (
          <PrivateRoute>
            <Pricing></Pricing>
          </PrivateRoute>
        ),
        loader: () => fetch("/list.json"),
      },
      {
        path: "/locations/:id",
        element: (
          <PrivateRoute>
            <LocationDetails></LocationDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/location.json"),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
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
