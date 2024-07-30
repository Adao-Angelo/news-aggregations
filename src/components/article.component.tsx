import "../assets/styles/componentsStyles/article.css";
export default function Article() {
  return (
    <>
      <article className="article-container">
        <div className="article-image">
          <img
            src="https://fatstacksblog.com/wp-content/uploads/2019/11/Person-writing-article-nov26.jpg"
            alt="Article Image"
          />
        </div>
        <p className="article-tittle size-20 f-semibold">
          The Ultimate Guide to Bali: What to See, Do, and Eat
        </p>
        <p className="article-description size-14">
          Malesuada egestas nunc vestibulum egestas mauris augue tempor
          scelerisque eros
        </p>

        <aside className="article-information">
          <p className="article-author f-semibold">By John Doe</p>
          <p className="article-date size-13">12/05/2022 13:40</p>
        </aside>
      </article>
    </>
  );
}
