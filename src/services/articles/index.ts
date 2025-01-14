import { api } from "../../lib/axios ";
import type { ArticleType } from "../../types";

export namespace ArticlesServices {
  export async function fetchArticles(filters: {
    category?: string;
    source?: string;
    title?: string;
    date?: string;
  }) {
    try {
      const response = await api.get("/search", {
        params: filters,
      });

      return response.data;
    } catch (error) {
      throw new Error("Error on  fetching articles: " + error);
    }
  }

  export async function fetchArticleById(
    id: string,
    filters: {
      category?: string;
      source?: string;
      title?: string;
      date?: string;
    }
  ) {
    try {
      const response = await api.get(`/search?id=${id}`, {
        params: filters,
      });

      const filteredNews = response.data.news.filter(
        (article: ArticleType) => article.id === id
      );

      return {
        status: "ok",
        news: filteredNews.length > 0 ? filteredNews : [],
      };
    } catch (error) {
      throw new Error("Error fetching article by ID: " + error);
    }
  }
}
