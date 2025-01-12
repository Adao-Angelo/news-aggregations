import type { ArticleType } from "../types";

interface ArticlesPros {
  article: ArticleType;
}

export default function Article({ article }: ArticlesPros) {
  const shortenText = (text: string, maxLength = 100) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const defaultImageUrl = "/file-not-found.avif";

  return (
    <article className="">
      <div className="mb-[1.7rem]">
        <img
          className="w-full h-[31.5rem]  bg-center  object-cover bg-pos border-[0.2rem] border-primaryBlack"
          src={article.image || defaultImageUrl}
          alt="Article of: "
        />
      </div>
      <p className="text-[2rem] font-medium">{article.title}</p>
      <div>
        <p className="text-[1.4rem] pt-[1.8rem] pb-[3.8rem]">
          {shortenText(article.description)}
        </p>
      </div>
      <aside className="flex justify-between py-[1.6rem] border-t-[0.2rem] border-primaryBlack">
        <p className="text-[1.4rem] font-medium">By {article.author.name}</p>

        <p className="text-[1.3rem] size-13">{article.published_at}</p>
      </aside>
    </article>
  );
}
