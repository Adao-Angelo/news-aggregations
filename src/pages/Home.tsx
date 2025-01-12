import Articles from "../components/articles";
import Filter from "../components/filter.component";
import Pagination from "../components/pagination.component";
import RootLayout from "./Layout";
export default function Home() {
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
