import React from "react";
import styled from "@emotion/styled";

const SearchBar = styled.input`
  text-align: center;
  border: none;
  flex-grow: 1;
  font-size: 1rem;
  height: 100%;
  padding: 0;
  outline-color: #f5c342;
`;

const Search = ({ onSearch }) => {
  const [Input, setInput] = React.useState(null);

  function handleChange(event) {
    const value = event.target.value;
    setInput(value);
    onSearch(value);
  }

  return (
    <SearchBar
      placeholder="Enter Cocktailname"
      onChange={handleChange}
      value={Input}
    ></SearchBar>
  );
};

export default Search;
