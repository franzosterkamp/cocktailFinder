import React from "react";
import styled from "@emotion/styled";
import search from "../assets/search.svg";

const AppBar = styled.div`
  width: 100%;
  height: 70px;
  background: lightblue;
`;

export default function Header() {
  return (
    <AppBar>
      <SearchIcon></SearchIcon>
    </AppBar>
  );
}

const SearchButton = styled.button`
  width: 50px;
  height: 100%;
  border: none;
  background: white;
  cursor: pointer;
  outline-color: #f5c342;
`;

function SearchIcon({ onClick }) {
  return (
    <SearchButton onClick={onClick}>
      <img src={search} alt="SearchButton" />
    </SearchButton>
  );
}
