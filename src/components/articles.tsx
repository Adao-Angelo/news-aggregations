import { useState } from "react";
import Article from "./article.component";
import LoadingArticles from "./loadingArticles.component";

export default function Articles() {
  const [articles] = useState<any[]>([]);
  const [loading] = useState(true);

  return (
    <>
      <section className="grid  grid-cols-3 gap-[2rem]">
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
