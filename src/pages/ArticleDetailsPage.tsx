import ArticleDetails from "../components/ArticleDetails/ArticleDetails";
import { useArticleDetail } from "../components/ArticleDetails/hooks/useArticleDetails";
import ErrorArticleDetails from "../components/ArticleDetails/states/ErrorArticleDetails";
import LoadingArticleDetails from "../components/ArticleDetails/states/LoadingArticleDetails";
import RootLayout from "./Layout";

export default function ArticleDetailsPage() {
  const { articles, isLoading, error, refetch } = useArticleDetail();

  return (
    <RootLayout>
      {isLoading ? (
        <section className="lg:px-[25.5rem] py-[8.2rem] md:px-[10rem] px-[4rem]">
          <LoadingArticleDetails />
        </section>
      ) : error ? (
        <ErrorArticleDetails
          message="We could not carry the details of the article."
          onRetry={refetch}
        />
      ) : (
        <ArticleDetails data={articles}></ArticleDetails>
      )}
    </RootLayout>
  );
}
