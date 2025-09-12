import { useQuery } from "react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { ArticlesServices } from "../../../services/articles";
import type { ArticleType } from "../../../types";

export function useArticleDetail() {
  const [searchParams] = useSearchParams();

  const { id } = useParams<{ id: string }>();
  const filters = {
    category: searchParams.get("category") || "",
    source: searchParams.get("source") || "",
    keywords: searchParams.get("keywords") || "",
    start_date: searchParams.get("start_date") || "",
    page: searchParams.get("page") || "1",
  };

  const {
    data: articles,
    isLoading,
    error,
    refetch,
  } = useQuery<{
    news: ArticleType[];
  }>(
    ["article", id],
    async () => {
      const response = await ArticlesServices.fetchArticleById(
        id as string,
        filters
      );

      return response;
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  return { articles, isLoading, error, refetch };
}
