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

export default function Search({ value, onChange }) {
  return (
    <SearchBar
      placeholder="Cocktail here!"
      value={value}
      onChange={event => {
        const newSearchValue = event.target.value;
        onChange(newSearchValue);
      }}
    ></SearchBar>
  );
}
