import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Error from "./component/Error/Error";
import Home from "./component/Home/Home";
import Contact from "./component/Contact/Contact";
import Protfolio from "./component/Protfolio/Protfolio";

import SkillsPrograges from "./component/SkillsPrograges/SkillsPrograges";
import Bannar from "./component/Banner/Banner";




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
        path:"/protfolio",
        element:<Protfolio></Protfolio>
      },
      {
        path:"/skill",
        element:<SkillsPrograges></SkillsPrograges>
      },
      {
        path:"/banner",
        element:<Bannar></Bannar>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>

);
