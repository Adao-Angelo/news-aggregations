import Articles from "../components/Articles/ArticleList";
import Filter from "../components/Filter";
import RootLayout from "../components/Layout";
import Pagination from "../components/pagination";
export default function HomePage() {
  return (
    <RootLayout>
      <div className="lg:px-[16rem] md:px-[10rem] px-[4rem] py-[10.2rem]">
        <Filter></Filter>
        <Articles></Articles>
        <Pagination></Pagination>
      </div>
    </RootLayout>
  );
}
