import "../assets/styles/componentsStyles/filter.css";

import SearchInputComponent from "./searchArticleInputFilter";

export default function Filter() {
  return (
    <section className="container-filter">
      <aside className="inputs-filter-box">
        <div className="search-article-box ">
          <SearchInputComponent></SearchInputComponent>
        </div>

        <div className="filter-sources">
          <select className="select-source color-black f-medium">
            <option value="">Sources</option>
            <option value="Insurance Journal">Insurance Journal</option>
            <option value="cnn">CNN</option>
            <option value="TechCrunch">TechCrunch</option>
            <option value="The Wall Street Journal">
              The Wall Street Journal
            </option>
          </select>
        </div>
        <div className="filter-categories">
          <select className="select-source color-black f-medium">
            <option value="">Categories</option>
          </select>
        </div>
        <div className="filter-Date">
          <input type="date" name="date-input-filter" id="date-input-filter" />
        </div>
      </aside>
    </section>
  );
}
