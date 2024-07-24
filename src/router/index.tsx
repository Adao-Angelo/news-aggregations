import { createBrowserRouter } from "react-router-dom";

import About from "../pages/About";

import NotFound from "../errors/routingErrors";
import Details from "../pages/details";
import App from "../App";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
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
