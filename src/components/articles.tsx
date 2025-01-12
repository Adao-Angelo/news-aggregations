import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ArticlesServices } from "../services/articles";
import type { ArticleType } from "../types";
import Article from "./article.component";
import LoadingArticles from "./loadingArticles.component";

export default function Articles() {
  const [searchParams] = useSearchParams();

  const filters = {
    category: searchParams.get("category") || "",
    source: searchParams.get("source") || "",
    title: searchParams.get("search") || "",
    date: searchParams.get("date") || "",
  };

  const { data, isLoading, isError } = useQuery<
    {
      results: ArticleType[];
    },
    Error
  >(
    ["articles", filters],
    async () => await ArticlesServices.fetchArticles(filters),
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
