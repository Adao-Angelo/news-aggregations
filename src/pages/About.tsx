import RootLayout from "./Layout";

export default function About() {
  return (
    <>
      <RootLayout>
        <section
          id="about"
          className="lg:px-[25.5rem] py-[8.2rem] grid gap-[3rem]  md:px-[10rem] px-[4rem] "
        >
          <p className="font-bold text-[3.2rem]">About News Aggregator</p>

          <div>
            <p className="text-[2rem] font-semibold mb-[1rem]">Overview</p>
            <p className="text-[1.6rem]">
              Welcome to News Aggregator, your number one source for the latest
              news articles from around the world. We're dedicated to providing
              you the best of news, with a focus on reliability, accessibility,
              and comprehensiveness.
            </p>
          </div>
          <div>
            <p className="text-[2rem] font-semibold mb-[1rem]">Our Mission</p>
            <p className="text-[1.6rem]">
              Our mission is to provide a platform for people to discover and
              engage with high-quality news and articles from a variety of
              sources.
            </p>
          </div>
          <div>
            <p className="text-[2rem] font-semibold mb-[1rem]">History</p>
            <p className="text-[1.6rem]">
              News Aggregator was founded in 2020 with the goal of creating a
              platform that aggregates high-quality news and articles from
              around the web.
            </p>
          </div>

          <p className="font-popOne text-[1.8rem]">Thanks !!!</p>
        </section>
      </RootLayout>
    </>
  );
}
