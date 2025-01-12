import Article from "./article.component";

import { useQuery } from "react-query";
import { ToastContainer } from "react-toastify";
import { ArticlesServices } from "../services/articles";
import type { ArticleType, FiltersType } from "../types";
import LoadingArticles from "./loadingArticles.component";

export default function Articles() {
  const filters: FiltersType = {
    category: "Technology",
    source: "TechCrunch",
    title: "apple",
    date: "2025-01-11",
  };

  const { data, isLoading, isError } = useQuery<
    {
      results: ArticleType[];
    },
    Error
  >("articles", async () => await ArticlesServices.fetchArticles(filters), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

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
