import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Error from "./component/Error/Error";
import Home from "./component/Home/Home";
import JobDetails from "./component/JobDetails/JobDetails";
import AppliedJob from "./component/AppliedJob/AppliedJob";



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
        path: "/details/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/appliedJob",
        element:<AppliedJob></AppliedJob>,
        loader:() => fetch("/jobs.json")
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
