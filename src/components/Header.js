import React from "react";
import styled from "@emotion/styled";
import Search from "./SeachBar";
import { SearchIcon } from "./SearchButton";

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
  font-size: 1.5rem;
  height: 100%;
  color: black;
  background-color: #f9db49;
`;

// export function handleSearch(value) {
//   console.log(value);
// }

export default function Header({ onSearch }) {
  return (
    <AppBar>
      <Title>Cocktail-Finder.</Title>
      <Search onSearch={onSearch}></Search>
      <SearchIcon></SearchIcon>
    </AppBar>
  );
}
