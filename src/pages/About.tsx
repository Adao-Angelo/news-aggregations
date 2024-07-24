import { useEffect } from "react";
import Header from "../components/Header.component";
import Footer from "../components/footer.component";
import "../assets/styles/pagesStyles/About.css";

import { Player } from "@lottiefiles/react-lottie-player";

export default function About() {
  useEffect(() => {
    document.title = "News Aggregator | About us";
  }, []);

  return (
    <>
      <Header />
      <section className="container-about-description">
        <p className="f-Mc size-32">About News Aggregator</p>

        <Player
          src="https://lottie.host/f1e43bfe-605e-47be-9050-6c0813b751e8/NknCGrcFUS.json"
          className="about-image"
          loop
          autoplay
        />
        <p className="size-18 f-semibold">Overview</p>
        <p className="size-16">
          Welcome to News Aggregator, your number one source for the latest news
          articles from around the world. We're dedicated to providing you the
          best of news, with a focus on reliability, accessibility, and
          comprehensiveness.
        </p>
        <p className="size-18 f-semibold">Our Mission</p>
        <p className="size-16">
          Our mission is to provide a platform for people to discover and engage
          with high-quality news and articles from a variety of sources.
        </p>
        <p className="size-18 f-semibold">History</p>
        <p className="size-16">
          News Aggregator was founded in 2020 with the goal of creating a
          platform that aggregates high-quality news and articles from around
          the web.
        </p>

        <p className="f-Mc size-18">Thanks !!!</p>
      </section>
      <Footer />
    </>
  );
}
