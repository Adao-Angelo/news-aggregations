import Article from "./article.component";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingArticles from "./loadingArticles.component";
import { useFilter } from "../utils/filterContext"; // Import the useFilter hook

//https://newsdata.io/api/1/latest?apikey ?pub_49276d50a41a3f11782929b855acb6c37d991&q-Y-QUERY&page
export default function Articles() {
  const [articles, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { filterUrl } = useFilter(); // Use the filterUrl from context

  useEffect(() => {
    axios
      .get(
        `https://newsdata.io/api/1/latest?apikey=pub_49276d50a41a3f117829b855acb6c3733d991&q=${filterUrl}`
      )
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
