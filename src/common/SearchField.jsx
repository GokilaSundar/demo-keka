import React from "react";
import search from "../assets/icons8-search.svg";

const SearchField = ({
  searchItem,
  handleSearch,
  placeholder,
  className,
  imgStyle,
}) => {
  return (
    <div>
      <input
        type="text"
        name=""
        value={searchItem}
        onChange={handleSearch}
        id="TeamData"
        placeholder={placeholder}
        className={className}
      />
      <img src={search} alt="search" className={imgStyle} />
    </div>
  );
};

export default SearchField;
