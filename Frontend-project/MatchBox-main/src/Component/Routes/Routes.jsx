import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Premium from "../Premium/Premium";
import Support from "../Support/Support";
import Commands from "../Commands/Commands";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/premium",
                element: <Premium></Premium>,
            },
            {
                path: "/support",
                element: <Support></Support>,
            },
            {
                path: "/commands",
                element: <Commands></Commands>
            }
        ]
    },
]);
export default router;