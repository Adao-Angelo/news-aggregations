import { Link } from "react-router-dom";
import "../assets/styles/componentsStyles/Main.css";
import Article from "./article.component";
import Pagination from "./pagination.component";
import { HiOutlineFilter } from "react-icons/hi";
export default function Main() {
  return (
    <>
      <main className="main-container">
        <div className="top-main">
          <p className="f-Mc size-40 main-tittle">
            Articles{" "}
            <span className="f-medium size-16 color-gray200">
              (100 results)
            </span>
          </p>

          <Link to="/" className="f-medium size-14 color-gray200 filter-btn">
            <HiOutlineFilter />
            show filter
          </Link>
        </div>
        <section className="container-articles">
          <Article></Article>
          <Article></Article>
          <Article></Article>
          <Article></Article>
          <Article></Article>
          <Article></Article>
        </section>
        <div className="container-pagination">
          <Pagination></Pagination>
        </div>
      </main>
    </>
  );
}
