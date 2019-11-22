import React from "react";
import styled from "@emotion/styled";

const SearchBar = styled.input`
  text-align: center;
  border: none;
  flex-grow: 1;
  font-size: 1rem;
  height: 100%;
  padding: 0;
  outline: none;
`;

const Search = ({ onSearch, inputValue }) => {
  function handleChange(event) {
    const value = event.target.value;
    onSearch(value);
  }

  return (
    <SearchBar
      placeholder="Enter Cocktailname"
      onChange={handleChange}
      value={inputValue}
    ></SearchBar>
  );
};

export default Search;
