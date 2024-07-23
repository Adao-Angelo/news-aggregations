import "../assets/styles/componentsStyles/Main.css";
import Article from "./article.component";
export default function Main() {
  return (
    <>
      <main className="main-container">
        <p className="f-Mc size-40 main-tittle">Articles</p>
        <section className="container-articles">
          <Article></Article>
          <Article></Article>
          <Article></Article>
          <Article></Article>
          <Article></Article>
          <Article></Article>
        </section>
      </main>
    </>
  );
}
