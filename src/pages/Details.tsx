import { useQuery } from "react-query";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingDetails from "../components/LoadingDetails";
import PulseUp from "../components/PulseUp";
import { ArticlesServices } from "../services/articles";
import type { ArticleType } from "../types";
import formatArticleBody from "../utils/ArticleFormatter";
import { formatDate } from "../utils/formatDate";
import RootLayout from "./Layout";

export default function Details() {
  const [searchParams] = useSearchParams();

  const { id } = useParams<{ id: string }>();
  const filters = {
    category: searchParams.get("category") || "",
    source: searchParams.get("source") || "",
    keywords: searchParams.get("keywords") || "",
    start_date: searchParams.get("start_date") || "",
    page: searchParams.get("page") || "1",
  };
  const { data, isLoading, error } = useQuery<{
    news: ArticleType[];
  }>(
    ["article", id],
    async () => {
      const response = await ArticlesServices.fetchArticleById(
        id as string,
        filters
      );

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
    if (error) {
      toast.error("Error on list articles...");
    }
  }
  const defaultImageUrl = "/file-not-found.avif";
  return (
    <>
      <RootLayout>
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
                  ? defaultImageUrl
                  : data?.news[0].image || defaultImageUrl
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
      </RootLayout>
    </>
  );
}
