import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";

export default function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const totalResults = parseInt(searchParams.get("totalResults") || "0", 10);
  const articlesPerPage = 6;
  const totalPages = Math.ceil(totalResults / articlesPerPage);

  const handlePageClick = (page: number) => {
    window.scrollTo(0, 0);
    if (page >= 1 && page <= totalPages) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("page", String(page));
      setSearchParams(newParams);
    }
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <ul className="flex gap-2 text-gray-600 items-center">
        <li>
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            <ChevronLeft className="w-[2rem] h-[2rem]" />
          </button>
        </li>

        <li>
          <button className="px-[1rem] py-[1.1rem] text-[1.2rem] rounded bg-primaryBlack text-white font-medium cursor-default">
            {currentPage}
          </button>
        </li>

        <li>
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className={`p-2 rounded ${
              currentPage >= totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            <ChevronRight className="w-[2rem] h-[2rem]" />
          </button>
        </li>
      </ul>
    </div>
  );
}
