import { useEffect } from "react";

import Header from "../components/Header.component";
import "../assets/styles/pagesStyles/home.css";
export default function Home() {
  useEffect(() => {
    document.title = "News Aggregator | Home";
  }, []);
  return (
    <>
      <Header></Header>
    </>
  );
}
