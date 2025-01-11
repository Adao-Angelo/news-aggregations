import { useSearchParams } from "react-router-dom";

export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const changeFilterVisibility = () => {
    const filerState = searchParams.get("filterIsOpen");

    if (filerState === "false") {
      setSearchParams((params) => {
        params.set("filterIsOpen", "true");

        return params;
      });
    } else {
      setSearchParams((params) => {
        params.set("filterIsOpen", "false");

        return params;
      });
    }
  };

  return (
    <section>
      <div
        className={`flex justify-between  ${
          searchParams.get("filterIsOpen") === "true"
            ? "mb-[5.2rem]"
            : "mb-[8.2rem]"
        }`}
      >
        <div>
          <h1 className="font-popOne text-[4rem]">
            Articles
            <span className="text-[1.6rem] text-grayDark">100 results</span>
          </h1>
        </div>

        <button
          onClick={changeFilterVisibility}
          className={`p-[1.6rem] text-[1.4rem] rounded-[0.6rem] border-[0.2rem] ${
            searchParams.get("filterIsOpen") === "true"
              ? " border-primaryBlack text-primaryBlack"
              : "border-stroke text-grayDark"
          }`}
        >
          Show filters
        </button>
      </div>
      {searchParams.get("filterIsOpen") === "true" ? (
        <div className="flex justify-between items-center mb-[12.1rem]">
          <div className="w-[40%]">
            <input
              className="text-[1.2rem] w-full text-primaryBlack font-normal py-[1.8rem] px-[2.2rem] outline-none border-[0.2rem] border-primaryBlack"
              placeholder="Search for articles here..."
            />
          </div>
          <div className="w-[15%]">
            <select className="w-full text-primaryBlack bg-white font-medium text-[1.2rem] py-[1.8rem] px-[2.2rem] outline-none border-[0.2rem] border-primaryBlack">
              <option value="none">Sources</option>
              <option value="Insurance Journal">Insurance Journal</option>
              <option value="cnn">CNN</option>
              <option value="TechCrunch">TechCrunch</option>
              <option value="The Wall Street Journal">
                The Wall Street Journal
              </option>
            </select>
          </div>
          <div className="w-[15%]">
            <select className="w-full text-primaryBlack bg-white font-medium text-[1.2rem] py-[1.8rem] px-[2.2rem] outline-none border-[0.2rem] border-primaryBlack">
              <option value="">Categories</option>
            </select>
          </div>
          <div className="w-[25%]">
            <input
              type="date"
              className="w-full text-primaryBlack bg-white font-medium text-[1.2rem] py-[1.8rem] px-[2.2rem] outline-none border-[0.2rem] border-primaryBlack"
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
}
