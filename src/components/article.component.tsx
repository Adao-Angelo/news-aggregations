import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ArticleType } from "../types";
import { formatDate } from "../utils/formatDate";

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
      <div className="mb-[1.7rem] relative">
        <Link
          to={article.href}
          target="_blank"
          className="bg-white  absolute right-[1.2rem] top-[1.2rem]"
        >
          <ArrowUpRight className="w-[2.4rem] h-[2.4rem]"></ArrowUpRight>
        </Link>
        <img
          className="w-full h-[31.5rem]  bg-center  object-cover border-[0.2rem] border-primaryBlack"
          src={article.image || defaultImageUrl}
          alt={`Article of: ${article.title}`}
        />
      </div>
      <div className="h-[26rem]">
        <Link to={`/details/${article.id}`}>
          <p className="text-[2rem]  font-medium">{article.title}</p>
        </Link>
        <div>
          <p className="text-[1.4rem] pt-[1.8rem] pb-[3.8rem]">
            {shortenText(article.description)}
          </p>
        </div>
      </div>

      <aside className="flex justify-between py-[1.6rem] border-t-[0.2rem] border-primaryBlack">
        <p className="text-[1.4rem] font-medium">By {article.author.name}</p>

        <p className="text-[1.3rem] size-13">
          {formatDate(article.published_at)}
        </p>
      </aside>
    </article>
  );
}
