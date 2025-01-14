import { FilterIcon, Settings } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || ""
  );

  const changeFilterVisibility = () => {
    const filterState = searchParams.get("filterIsOpen");
    const newState = filterState === "true" ? "false" : "true";
    setSearchParams((params) => {
      params.set("filterIsOpen", newState);
      return params;
    });
  };

  const updateFilter = (key: string, value: string) => {
    setSearchParams((params) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      return params;
    });
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateFilter("keywords", searchValue);
    }
  };

  return (
    <section>
      <div
        className={`flex justify-between ${
          searchParams.get("filterIsOpen") === "true"
            ? "mb-[5.2rem]"
            : "mb-[8.2rem]"
        }`}
      >
        <div>
          <h1 className="font-popOne text-[2.5rem] lg:text-[4rem]">
            Articles
            <span className="text-[1.2rem] sm:text-[1.4rem]  font-medium font-sans text-grayDark">
              _ 50 results _
            </span>
          </h1>
        </div>

        <div className="flex items-center gap-[0.8rem]">
          <button
            onClick={changeFilterVisibility}
            className={`p-[1rem] md:p-[1.6rem] text-[1rem] lg:text-[1.4rem] flex gap-[0.8rem] rounded-[0.3rem] md:rounded-[0.6rem] border-[0.2rem] ${
              searchParams.get("filterIsOpen") === "true"
                ? "border-primaryBlack text-primaryBlack font-semibold"
                : "border-stroke text-grayDark"
            }`}
          >
            <FilterIcon
              className={`w-[1.4rem] h-[1.4rem]  ${
                searchParams.get("filterIsOpen") === "true"
                  ? "text-primaryBlack"
                  : "text-grayDark"
              }`}
            />
            Show filters
          </button>
          <div className="p-[1rem] md:p-[1.6rem] rounded-[0.4rem] md:rounded-[0.6rem] text-white bg-primaryBlack ">
            <Settings className="w-[2rem] h-[2rem]"></Settings>
          </div>
        </div>
      </div>

      {searchParams.get("filterIsOpen") === "true" && (
        <div className="flex flex-col gap-[1rem] md:flex-row justify-between items-center mb-[12.1rem]">
          <div className="md:w-[40%] w-full">
            <input
              className="text-[1.2rem] w-full text-primaryBlack font-normal py-[1.8rem] px-[2.2rem] outline-none border-[0.2rem] border-primaryBlack"
              placeholder="Search for articles here..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleSearchKeyDown}
            />
          </div>

          <div className="md:w-[15%] w-full">
            <select
              className="w-full text-primaryBlack bg-white font-medium text-[1.2rem] py-[1.8rem] px-[2.2rem] outline-none border-[0.2rem] border-primaryBlack"
              value={searchParams.get("source") || ""}
              onChange={(e) => updateFilter("source", e.target.value)}
            >
              <option value="">Sources</option>
              <option value="Insurance Journal">Insurance Journal</option>
              <option value="CNN">CNN</option>
              <option value="TechCrunch">TechCrunch</option>
              <option value="The Wall Street Journal">
                The Wall Street Journal
              </option>
            </select>
          </div>

          <div className="md:w-[15%] w-full">
            <select
              className="w-full text-primaryBlack bg-white font-medium text-[1.2rem] py-[1.8rem] px-[2.2rem] outline-none border-[0.2rem] border-primaryBlack"
              value={searchParams.get("category") || ""}
              onChange={(e) => updateFilter("category", e.target.value)}
            >
              <option value="">Categories</option>
              <option value="Technology">Technology</option>
              <option value="Finance">Finance</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
            </select>
          </div>

          <div className="md:w-[25%] w-full">
            <input
              type="date"
              className="w-full text-primaryBlack bg-white font-medium text-[1.2rem] py-[1.8rem] px-[2.2rem] outline-none border-[0.2rem] border-primaryBlack"
              value={searchParams.get("date") || ""}
              onChange={(e) => updateFilter("start_date", e.target.value)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
