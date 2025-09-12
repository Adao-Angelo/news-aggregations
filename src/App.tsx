import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./context/AuthContext";
import NotFoundPage from "./pages/404";
import About from "./pages/About";
import ArticleDetailsPage from "./pages/ArticleDetailsPage";
import Home from "./pages/HomePage";

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
              element: <ArticleDetailsPage></ArticleDetailsPage>,
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
