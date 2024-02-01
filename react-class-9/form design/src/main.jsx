import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./component/Home/Home";
import Form from "./component/Form/Form";
import Form2 from "./component/Form/Form2";
import Dada from "./component/Props/Dada";






const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/form1",
        element:<Form></Form>
      },
      {
        path:"/form2",
        element:<Form2></Form2>
      },
      {
        path:"/props",
        element:<Dada></Dada>
       
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
