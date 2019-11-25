import React from "react";
import styled from "@emotion/styled";
import { SearchIcon } from "./SearchButton";
import Search from "./SeachBar";

const AppBar = styled.div`
  width: 100%;
  height: 70px;
  background: lightblue;

  display: flex;
`;

const Title = styled.div`
  border: none;
  text-align: center;
  padding: 15px;
  flex-grow: 1;
  font-size: 1rem;
  height: 100%;
  color: black;
  background-color: #f9db49;
`;

// export function handleSearch(value) {
//   console.log(value);
// }

export default function Header({ searchValue, onValueChange }) {
  return (
    <AppBar>
      <Title>Cocktail-Finder.</Title>
      <Search value={searchValue} onChange={onValueChange}></Search>
      <SearchIcon></SearchIcon>
    </AppBar>
  );
}
