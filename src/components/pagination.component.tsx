import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";

interface PaginationProps {
  totalPages: number;
}

export default function Pagination({ totalPages }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const urlTotalPages = parseInt(searchParams.get("totalPages") || "1", 10);
  const effectiveTotalPages = totalPages || urlTotalPages;

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= effectiveTotalPages) {
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

        {Array.from(
          { length: effectiveTotalPages },
          (_, index) => index + 1
        ).map((page) => (
          <li key={page}>
            <button
              onClick={() => handlePageClick(page)}
              className={`px-[1rem] py-[1.1rem] text-[1.2rem] rounded ${
                currentPage === page
                  ? "bg-primaryBlack text-white font-medium"
                  : "hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === effectiveTotalPages}
            className={`p-2 rounded ${
              currentPage === effectiveTotalPages
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
