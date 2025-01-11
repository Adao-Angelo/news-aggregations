import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFoundPage from "./pages/404";
import About from "./pages/About";
import Details from "./pages/Details";
import Home from "./pages/Home";

export default function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/details/:id",
          element: <Details></Details>,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ])}
    />
  );
}
