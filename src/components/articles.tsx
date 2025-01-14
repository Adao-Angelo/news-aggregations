import { useEffect } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
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
    keywords: searchParams.get("keywords") || "",
    start_date: searchParams.get("start_date") || "",
    page: searchParams.get("page") || "1",
  };

  const articlesPerPage = 6;

  const { data, isLoading, error } = useQuery<
    {
      status: string;
      news: ArticleType[];
    },
    Error
  >(
    ["articles", filters],
    async () => {
      const response = await ArticlesServices.fetchArticles(filters);

      const totalPages = Math.ceil(response.news.length / articlesPerPage);
      updateUrlState(
        "hasNextPage",
        String(parseInt(filters.page, 10) < totalPages)
      );
      updateUrlState("totalResults", String(response.news.length));

      return response;
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  if (error) {
    toast.error("Error on list articles...");
  }

  useEffect(() => {
    updateUrlState("hasNextPage", String(data?.status));
  }, [location.pathname]);

  const currentPage = parseInt(filters.page, 10);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const articlesToShow = data?.news.slice(startIndex, endIndex) || [];

  return (
    <>
      <section className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-[2rem]">
        {isLoading || error ? (
          <LoadingArticles count={articlesPerPage} />
        ) : (
          articlesToShow.map((article) => (
            <Article key={article.id} article={article} />
          ))
        )}
        <ToastContainer />
      </section>
    </>
  );
}
