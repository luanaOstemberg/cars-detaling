import { createBrowserRouter, Navigate } from "react-router";
import Home from "../presentation/home/home";
import Layout from "../components/layout/layout";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home
            },
            //   {
            //     path: "/services",
                // Component: Services
            //   },
        ]
    },
    {
        path: "*",
        element: <Navigate to={"/"} redirect />
    }
]);