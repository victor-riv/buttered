import React from "react";

const SideSearch = (): JSX.Element => (
  <div className="sidebar">
    <h3
      className="text-grey mt-6 pb-3"
      style={{ borderBottom: "1px solid #405266" }}
    >
      Search Movie
    </h3>
    <form className="search-movie-form shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-5">
      <div className="mb-4">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="title"
        >
          Movie title
        </label>
        <input
          className="movie-search-input shadow border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Movie title.."
        />
      </div>

      <div className="flex justidy-center">
        <button
          className="movie-search-button w-full hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Search
        </button>
      </div>
    </form>
  </div>
);

export default SideSearch;
