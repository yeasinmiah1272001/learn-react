import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Error from "./component/Error/Error";
import Home from "./component/Home/Home";
import CardDetails from "./component/HomeCard/CardDetails";
import Donation from "./component/Donation/Donation";
import Login from "./component/Login/Login";
import Registration from "./component/Registration/Registration";
import AuthProvider from "./component/Provider/AuthProvider";
import Statictics from "./component/Statictice/Statictics";
import PrivateRoute from "./PrivateRoute/PrivateRoute";



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
        path: "/card/:id",
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donation",
        element: (
          <PrivateRoute>
            <Donation></Donation>
          </PrivateRoute>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/Statistics",
        element: (
          <PrivateRoute>
            <Statictics></Statictics>
          </PrivateRoute>
        ),
      },
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
