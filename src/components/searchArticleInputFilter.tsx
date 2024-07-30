import { useFilter } from "../utils/filterContext";

export default function SearchInputComponent() {
  const { filterUrl, setFilterUrl } = useFilter();

  let inputValue = filterUrl;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterUrl(event.target.value);
  };

  const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    inputValue = event.target.value;
  };

  return (
    <>
      <input
        value={inputValue}
        onChange={(e: any) => {
          e.preventDefault();
        }}
        onKeyDown={handleChange(e)}
        className="size-12 f-regular"
        type="search"
        name="search-article-input"
        id="search-article-input"
        placeholder="Search-article-input."
      />
    </>
  );
}
