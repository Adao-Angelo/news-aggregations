import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./context/AuthContext";
import NotFoundPage from "./pages/404";
import AboutPage from "./pages/AboutPage";
import ArticleDetailsPage from "./pages/ArticleDetailsPage";
import HomePage from "./pages/HomePage";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider
          router={createBrowserRouter([
            {
              path: "/",
              element: <HomePage></HomePage>,
            },
            {
              path: "/about",
              element: <AboutPage></AboutPage>,
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
