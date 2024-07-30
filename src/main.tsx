import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import { FilterProvider } from "./utils/filterContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FilterProvider>
      <RouterProvider router={routers}></RouterProvider>
    </FilterProvider>
  </React.StrictMode>
);
