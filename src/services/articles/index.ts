import { api } from "../../lib/axios ";

export namespace ArticlesServices {
  export async function fetchArticles(filters: {
    category?: string;
    source?: string;
    title?: string;
    date?: string;
  }) {
    try {
      const response = await api.get("/everything", {
        params: filters,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Error on  fetching articles: " + error);
    }
  }
}
