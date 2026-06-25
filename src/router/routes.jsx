import { createBrowserRouter } from "react-router";
import Home from "../presentation/home/home";
import Layout from "../components/layout/layout";
import Services from "../presentation/services/services";
import Contacto from "../presentation/contactos/contacto";
import Gallery from "../presentation/gallery/gallery";
import NotFound from "../presentation/not-found/not-found";

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
                path: "/contacto",
                Component: Contacto,
            },
            {
                path: "/galeria",
                Component: Gallery,
            },
        ],
    },
    {
        path: "*",
        Component: NotFound,
    },
]);