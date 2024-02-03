import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Error from "./component/Error/Error";
import Home from "./component/Home/Home";
import CardDetails from "./component/HomeCard/CardDetails";
import Donation from "./component/Donation/Donation";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/card/:id",
        element:<CardDetails></CardDetails>,
       loader:() =>fetch("/data.json")
      },
      {
        path:"/donation",
        element:<Donation></Donation>,
        loader:() =>fetch("/data.json")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
