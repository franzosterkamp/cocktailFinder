import React from "react";
import styled from "@emotion/styled";
import search from "../assets/search.svg";

const Button = styled.button`
  width: 50px;
  height: 100%;
  border: none;
  background: white;
  cursor: pointer;
  outline-color: white;
`;

export function SearchButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <img src={search} alt="Search_Button" />
    </Button>
  );
}
