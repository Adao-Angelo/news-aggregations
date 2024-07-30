import { Link } from "react-router-dom";
import "../assets/styles/componentsStyles/article.css";
import { useState } from "react";

export default function Article(newArticle: any) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const shortenText = (text: string, maxLength = 100) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const defaultImageUrl =
    "https://lightwidget.com/wp-content/uploads/localhost-file-not-found-480x480.avif";

  const { title, description, image_url } = newArticle.article;

  return (
    <article className="article-container">
      <div className="article-image">
        <img src={image_url || defaultImageUrl} alt="Article Image" />
      </div>
      <p className="article-title size-20 f-semibold">{title}</p>
      <div
        className="text-container"
        onMouseEnter={() => setHoveredIndex(title)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <p className="article-description size-14">
          {shortenText(description)}
        </p>
        {hoveredIndex === title && description && (
          <div className="tooltip size-14 f-medium">
            {description}
            <div className="arrow"></div>
          </div>
        )}
      </div>
      <aside className="article-information">
        <Link
          className="color-black"
          to={newArticle.article.source_url}
          target="blank"
        >
          <p className="article-author f-semibold">
            By {newArticle.article.source_id}
          </p>
        </Link>

        <p className="article-date size-13">{newArticle.article.pubDate}</p>
      </aside>
    </article>
  );
}
