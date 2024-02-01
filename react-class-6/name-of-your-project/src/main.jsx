import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./LayOut/LayOut";
import Error from "./LayOut/Error/Error";
import Home from "./Component/Home/Home";
import PhoneDetails from "./Component/Phones/PhoneDetails/PhoneDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
      element:<Home></Home>,
      loader:() => fetch("/pHero.json")
    },
    {
      path:"/details/:id",
      element:<PhoneDetails></PhoneDetails>,
      loader:() => fetch("/pHero.json")
    }
    ] 
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
