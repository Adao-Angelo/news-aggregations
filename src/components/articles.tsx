import Article from "./article.component";

import { useState, useEffect } from "react";

import axios from "axios";

import LoadingArticles from "./loadingArticles.component";
export default function Articles() {
  const [articles, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://newsdata.io/api/1/latest?apikey=pub_49276d50a41a3f117829b855acb6c3733d991&q=Angola"
      )

      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <section className="container-articles">
        {loading ? (
          <LoadingArticles></LoadingArticles>
        ) : (
          articles.map((article) => (
            <Article key={article.article_id}></Article>
          ))
        )}
      </section>
    </>
  );
}
