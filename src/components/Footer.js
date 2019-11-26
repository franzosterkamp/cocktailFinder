import React from "react";
import styled from "@emotion/styled";

const FooterBar = styled.div`
  height: 40px;
  background-color: ${props => props.theme.primary};
  width: 100%;
  display: flex;
  margin-top: 10px;
  justify-content: center;
`;

const Button = styled.button`
  box-sizing: content-box;
  border: none;
  background-color: ${props => props.theme.background};
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
`;

export default function Footer({ onClick }) {
  return (
    <FooterBar>
      <Button onClick={onClick}>Change Theme</Button>
    </FooterBar>
  );
}
