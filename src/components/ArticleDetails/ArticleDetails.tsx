import { Link } from "react-router-dom";
import PulseUp from "../../components/PulseUp";
import type { ArticleType } from "../../types";
import formatArticleBody from "../../utils/ArticleFormatter";
import { formatDate } from "../../utils/formatDate";

import { DEFAULT_IMAGE_URL } from "../../constant/defaultImageUrl";

interface ArticleDetailsProps {
  data:
    | {
        news: ArticleType[];
      }
    | undefined;
}

export default function ArticleDetails({ data }: ArticleDetailsProps) {
  return (
    <div>
      <section className="lg:px-[25.5rem] py-[8.2rem] md:px-[10rem] px-[4rem]">
        <p className="font-bold text-[3.2rem]">{data?.news[0].title}</p>

        <div className="flex justify-between items-center mt-[1.8rem] mb-[4.2rem]">
          <p className="font-semibold text-[1.6rem] ">
            By {data?.news[0].author},
            <span className="font-normal">
              <span> </span>
              Category:{" "}
              <span className="text-grayDark">
                {data?.news[0]?.category[1]}
              </span>
            </span>
          </p>
          <p className="text-[1.3rem]">
            {formatDate(data?.news[0]?.published as string)}
          </p>
        </div>

        <div className="border-b border-primaryBlack">
          <img
            src={
              data?.news[0].image == "None"
                ? DEFAULT_IMAGE_URL
                : data?.news[0].image || DEFAULT_IMAGE_URL
            }
            alt="Image of: "
            className="w-full h-[48.7rem] bg-cover object-cover bg-pos border-[0.2rem] border-primaryBlack"
          />

          <p className="pt-[3.2rem] pb-[3.4rem] text-[1.6rem]">
            {data?.news[0].description}
          </p>
        </div>
        <div className="my-[4.2rem] leading-loose text-[1.6rem] grid gap-[2.2rem]">
          <p>
            <Link to={data?.news[0].url || ""}>see all info</Link>
          </p>
          {formatArticleBody(data?.news[0].language || "")}
        </div>
        <PulseUp>
          <p className="font-popOne text-[2.4rem]">Thanks for read !!</p>
        </PulseUp>
      </section>
    </div>
  );
}
