import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Error from "./component/Error/Error";
import Home from "./component/Home/Home";
import Details from "./component/Details/Details";
import CartDetails from "./component/Details/CartDetails";
import Update from "./component/Update/Update";
import AddToCart from "./component/AddToCart/AddToCart";
import MyCart from "./component/MyCart/MyCart";
import Login from "./component/Login/Login";
import Registration from "./component/Registration/Registration";
import AuthProvider from "./component/Provider/AuthProvider";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Contact from "./component/Contact/Contact";





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
        path: "/category/:category",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:5000/brand`),
      },
      {
        path: "/detailsCart/:price",
        element: <CartDetails></CartDetails>,
        loader: () => fetch(`http://localhost:5000/brand`),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/added/${params.id}`),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddToCart></AddToCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/my",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:5000/added`),
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
        path:"/about",
        element:<Contact></Contact>
      }
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
