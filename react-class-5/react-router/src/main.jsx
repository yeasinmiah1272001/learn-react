import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

  import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Root/Root';
import Products from './Component/Products/Products';
import Home from './Component/Home/Home';
import Cards from './Component/Cards/Cards';
import DeshBoard from './Component/DeshBoard/DeshBoard';

  const router = createBrowserRouter([
    {
      path: "",
      element: <Root></Root>,
      children: [
        {
          path: "/product",
          element: <Products></Products>,
          loader: () => fetch(`https://dummyjson.com/products`),
        },
        {
          path: "/card/:id",
          element: <Cards></Cards>,
          loader: ({ params }) =>
            fetch(`https://dummyjson.com/products/${params.id}`),
        },

        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/desh/:id",
          element: <DeshBoard></DeshBoard>,
        },
      ],
    },
  ]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
