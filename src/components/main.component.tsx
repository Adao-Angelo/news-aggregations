import { Link } from "react-router-dom";
import "../assets/styles/componentsStyles/Main.css";
import { useSpring, animated } from "@react-spring/web";
import Articles from "./articles";
import Pagination from "./pagination.component";
import { HiOutlineFilter } from "react-icons/hi";

import Filter from "./filter.component";

import { useState } from "react";
export default function Main() {
  const [isVisible, setIsVisible] = useState(false);

  const props = useSpring({
    from: { height: 0, opacity: 0 },
    to: {
      height: isVisible ? "auto" : 0,
      opacity: isVisible ? 1 : 0,
    },
    config: { duration: 300 },
  });

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

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

          <Link
            onClick={toggleVisibility}
            to="/"
            className={"f-medium size-14 color-black filter-btn"}
            style={{
              borderColor: isVisible ? "var(--black)" : "var(--stroke)",
            }}
          >
            <HiOutlineFilter />
            show filter
          </Link>
        </div>
        <animated.div style={props}>
          {isVisible && <Filter></Filter>}
          {!isVisible && <Filter></Filter>}
        </animated.div>
        <Articles></Articles>

        <div className="container-pagination">
          <Pagination></Pagination>
        </div>
      </main>
    </>
  );
}
