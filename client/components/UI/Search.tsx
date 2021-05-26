import React from "react";

function Search() {
  return (
    <div className="flex items-center bg-gray-100 border rounded hover:border-blue-500 hover:bg-white">
      <i className="pl-3 text-gray-500 fas fa-search"></i>
      <input
        type="text"
        placeholder="Search"
        className="px-2 py-1 pr-3 bg-transparent rounded w-160 focus:outline-none"
      />
    </div>
  );
}

export default Search;
