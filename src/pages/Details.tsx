import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import LoadingDetails from "../components/LoadingDetails";
import PulseUp from "../components/PulseUp";
import { ArticlesServices } from "../services/articles";
import type { ArticleType } from "../types";
import formatArticleBody from "../utils/ArticleFormatter";
import { formatDate } from "../utils/formatDate";
import RootLayout from "./Layout";

export default function Details() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery<{
    has_next_pages: boolean;
    results: ArticleType[];
  }>(
    ["article", id],
    async () => {
      const response = await ArticlesServices.fetchArticleById(id as string);

      return response;
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  if (isLoading) {
    return (
      <RootLayout>
        <section className="lg:px-[25.5rem] py-[8.2rem] md:px-[10rem] px-[4rem]">
          <LoadingDetails />
        </section>
      </RootLayout>
    );
  }

  if (error) {
    return <div></div>;
  }
  return (
    <>
      <RootLayout>
        <section className="lg:px-[25.5rem] py-[8.2rem] md:px-[10rem] px-[4rem]">
          <p className="font-bold text-[3.2rem]">{data?.results[0].title}</p>

          <div className="flex justify-between items-center mt-[1.8rem] mb-[4.2rem]">
            <p className="font-semibold text-[1.6rem] ">
              By {data?.results[0].author.name},
              <span className="font-normal">
                <span> </span>
                Category:{" "}
                <span className="text-grayDark">
                  {data?.results[0]?.categories[1]?.name}
                </span>
              </span>
            </p>
            <p className="text-[1.3rem]">
              {formatDate(data?.results[0]?.published_at as string)}
            </p>
          </div>

          <div className="border-b border-primaryBlack">
            <img
              src={data?.results[0].image}
              alt="Image of: "
              className="w-full h-[48.7rem] bg-cover object-cover bg-pos border-[0.2rem] border-primaryBlack"
            />

            <p className="pt-[3.2rem] pb-[3.4rem] text-[1.6rem]">
              {data?.results[0].description}
            </p>
          </div>
          <div className="my-[4.2rem] leading-loose text-[1.6rem] grid gap-[2.2rem]">
            {formatArticleBody(data?.results[0].body || "")}
          </div>
          <PulseUp>
            <p className="font-popOne text-[2.4rem]">Thanks for read !!</p>
          </PulseUp>
        </section>
      </RootLayout>
    </>
  );
}
