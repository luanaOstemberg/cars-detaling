import { createBrowserRouter, Navigate } from "react-router";
import Contactos from "../presentation/contactos/contactos";
import Home from "../presentation/home/home";
import Layout from "../components/layout/layout";
import Services from "../presentation/services/services";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/servicios",
                Component: Services,
            },
            {
                path: "/contactos",
                Component: Contactos,
            },
        ],
    },
    {
        path: "*",
        element: <Navigate to={"/"} replace />,
    },
]);