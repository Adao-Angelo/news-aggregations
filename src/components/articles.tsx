import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ArticlesServices } from "../services/articles";
import type { ArticleType } from "../types";
import Article from "./article.component";
import LoadingArticles from "./loadingArticles.component";

export default function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateUrlState = (key: string, value: string) => {
    setSearchParams((params) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      return params;
    });
  };

  const filters = {
    category: searchParams.get("category") || "",
    source: searchParams.get("source") || "",
    title: searchParams.get("search") || "",
    date: searchParams.get("date") || "",
    page: searchParams.get("page") || "1",
  };

  const { data, isLoading, isError } = useQuery<
    {
      results: ArticleType[];
    },
    Error
  >(
    ["articles", filters],
    async () => {
      const response = await ArticlesServices.fetchArticles(filters);

      updateUrlState("hasNextPage", String(response.has_next_pages));

      return response;
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  if (isError) {
    return null;
  }

  return (
    <>
      <section className="grid grid-cols-3 gap-[2rem]">
        {isLoading || isError ? (
          <LoadingArticles count={6} />
        ) : (
          data?.results.map((article) => (
            <Article key={article.id} article={article} />
          ))
        )}
        <ToastContainer />
      </section>
    </>
  );
}
