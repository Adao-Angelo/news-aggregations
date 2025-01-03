import Article from "./article.component";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingArticles from "./loadingArticles.component";
import { useFilter } from "../utils/filterContext"; // Import the useFilter hook
import { baseUrl } from "../utils/baseUrl";

export default function Articles() {
  const [articles, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { filterUrl } = useFilter(); // Use the filterUrl from context

  useEffect(() => {
    axios
      .get(`${baseUrl}${"Home"}`)
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error on request articles Data", error);
      });
  }, [filterUrl]);

  return (
    <>
      <section className="container-articles">
        {loading ? (
          <LoadingArticles></LoadingArticles>
        ) : (
          articles.map((article) => (
            <Article key={article.article_id} article={article}></Article>
          ))
        )}
      </section>
    </>
  );
}
