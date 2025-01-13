import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./context/AuthContext";
import NotFoundPage from "./pages/404";
import About from "./pages/About";
import Details from "./pages/Details";
import Home from "./pages/Home";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
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
      </AuthProvider>
    </QueryClientProvider>
  );
}
