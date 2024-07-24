import "../assets/styles/componentsStyles/articlesDetails.css";

export default function ArticleDetails() {
  return (
    <>
      <section className="container-details-articles">
        <p className={"articles-tittle f-bold size-32"}>
          Top 10 Bali Travel Destinations for 2023
        </p>
        <aside className="article-information">
          <p className="article-author f-semibold  size-16 ">By John Doe</p>
          <p className="article-date size-13">12/05/2022 13:40</p>
        </aside>
        <div className="article-image">
          <img
            src="https://fatstacksblog.com/wp-content/uploads/2019/11/Person-writing-article-nov26.jpg"
            alt="Article Image"
          />
        </div>

        <aside className="article-description ">
          <p className="size-16">
            Malesuada egestas nunc vestibulum egestas mauris augue tempor
            scelerisque eros.
          </p>
        </aside>

        <aside className="article-info-text">
          <p className="size-16">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it looking like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </p>
        </aside>

        <p className={"size-24 f-Mc"}>Thanks for read !!</p>
      </section>
    </>
  );
}
