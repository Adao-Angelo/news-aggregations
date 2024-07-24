import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";

import NotFound from "../errors/routingErrors";
import Details from "../pages/details";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/details",
    element: <Details></Details>,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
