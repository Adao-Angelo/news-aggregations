import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { ARTICLES_PER_PAGE } from "../../../constant";
import { ArticlesServices } from "../../../services/articles";
import type { ArticleType } from "../../../types";

export default function useArticleList() {
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

      const totalPages = Math.ceil(response.news.length / ARTICLES_PER_PAGE);
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
      onError: () => {
        toast.error("Error on loading articles...");
      },
    }
  );

  useEffect(() => {
    updateUrlState("hasNextPage", String(data?.status));
  }, [location.pathname]);

  const currentPage = parseInt(filters.page, 10);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const articlesToShow = data?.news.slice(startIndex, endIndex) || [];

  return { isLoading, error, ARTICLES_PER_PAGE, articlesToShow };
}
