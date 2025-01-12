type LoadingArticlesProps = {
  count: number;
};

export default function LoadingArticles({ count }: LoadingArticlesProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-start space-y-4 z-0 mb-6"
        >
          <div className="w-full h-[30rem] bg-gray-300 animate-pulse rounded"></div>
          <div className="w-60 h-5 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="w-72 h-7 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="flex justify-between w-full">
            <div className="w-48 h-5 bg-gray-300 animate-pulse rounded-sm"></div>
            <div className="w-24 h-5 bg-gray-300 animate-pulse rounded-full"></div>
          </div>
        </div>
      ))}
    </>
  );
}
