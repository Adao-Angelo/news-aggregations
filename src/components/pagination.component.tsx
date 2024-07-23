import { Link } from "react-router-dom";
import "../assets/styles/componentsStyles/pagination.css";

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

// interface IPaginationParams {
//   currentPage: string;
//   totalPages: string;
// }

export default function Pagination() {
  return (
    <>
      <div className="pagination-container">
        <ul className="f-medium">
          <li>
            <Link to="./">
              <FaAngleLeft />
            </Link>
          </li>
          <li>
            <a href="#">1,</a>
          </li>
          <li>
            <a href="#">2,</a>
          </li>
          <li>
            <a href="#">3,</a>
          </li>
          <li>
            <a href="#">4,</a>
          </li>
          <li>
            <a href="#">5,</a>
          </li>
          <li>
            <Link to="./">
              <FaAngleRight />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
