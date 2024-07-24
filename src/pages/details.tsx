import Header from "../components/Header.component";
import Footer from "../components/footer.component";
import ArticleDetails from "../components/articleDetails";
import { useEffect } from "react";

export default function Details() {
  useEffect(() => {
    document.title = "News Aggregator | Details of  ";
  }, []);
  return (
    <>
      <Header></Header>
      <ArticleDetails></ArticleDetails>
      <Footer></Footer>
    </>
  );
}
