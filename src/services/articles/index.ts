import { api } from "../../lib/axios ";

export namespace ArticlesServices {
  export async function fetchArticles(filters: {
    category?: string;
    source?: string;
    title?: string;
    date?: string;
  }) {
    try {
      const response = await api.get("/everything?limit=9", {
        params: filters,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Error on  fetching articles: " + error);
    }
  }

  export async function fetchArticleById(id: string) {
    try {
      const response = await api.get(`/article/?id=${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching article by ID: " + error);
    }
  }
}
