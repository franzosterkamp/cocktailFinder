import React from "react";
import styled from "@emotion/styled";
import search from "../assets/search.svg";

const AppBar = styled.div`
  width: 100%;
  height: 70px;
  background: lightblue;
  display: flex;
`;

export default function Header() {
  return (
    <AppBar>
      <Search></Search>
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

const SearchBar = styled.input`
  text-align: center;
  border: none;
  flex-grow: 1;
  font-size: 1rem;
  height: 100%;
  padding: 0;
  outline-color: #f5c342;
`;

function Search() {
  return <SearchBar placeholder="Enter Cocktailname"></SearchBar>;
}
