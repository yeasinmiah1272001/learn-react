import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Error from "./component/Error/Error";
import Home from "./component/Home/Home";
import Details from "./component/Details/Details";
import DetailsCart from "./component/Details/DetailsCart";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/brand"),
      },
      {
        path: "/cart",
        element: <Details></Details>,
        loader: () => fetch(`http://localhost:5000/brand`),
      },
      {
        path: "/cartDetails/:id",
        element: <DetailsCart></DetailsCart>,
        loader: ({params}) => fetch(`http://localhost:5000/brand/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
