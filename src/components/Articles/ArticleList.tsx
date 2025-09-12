import { Toaster } from "react-hot-toast";
import { TOAST_OPTIONS } from "../../constant/toastOptions";
import Article from "./Article";
import useArticleList from "./hooks/useArticleList";
import LoadingArticles from "./states/loadingArticles";

export default function ArticleList() {
  const { isLoading, error, ARTICLES_PER_PAGE, articlesToShow } =
    useArticleList();

  return (
    <>
      <section className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-[2rem]">
        {isLoading || error ? (
          <LoadingArticles count={ARTICLES_PER_PAGE} />
        ) : (
          articlesToShow.map((article) => (
            <Article key={article.id} article={article} />
          ))
        )}
      </section>
      <Toaster toastOptions={TOAST_OPTIONS} />
    </>
  );
}
