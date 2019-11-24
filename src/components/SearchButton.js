import React from "react";
import styled from "@emotion/styled";
import search from "../assets/search.svg";

const SearchButton = styled.button`
  width: 50px;
  height: 100%;
  border: none;
  background: white;
  cursor: pointer;
  outline-color: #f5c342;
`;

export function SearchIcon({ onClick }) {
  return (
    <SearchButton onClick={onClick}>
      <img src={search} alt="SearchButton" />
    </SearchButton>
  );
}
