import { Search } from "lucide-react";
import React, { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  const onSearch = () => {
    handleSearch(query);
  };

  return (
    <>
      <div className="my-4 mx-auto flex w-[320px] md:w-[660px] lg:w-[720px] justify-center relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Videos..."
          className="p-2 w-full rounded-3xl text-white border border-white bg-transparent pr-12 pl-3"
        />
        <button onClick={onSearch} className="absolute right-4 top-2">
          <Search />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
