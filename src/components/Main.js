import React from "react";
import styled from "@emotion/styled";

import { getCocktails } from "../api/cocktails";

const CocktailTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CocktailTag = styled.div`
  height: 300px;
  width: 200px;
  background-color: #ffff55;
  border-radius: 10px;
  margin: 5px;
  display: flex;
  flex-flow: column;
`;

const CocktailImage = styled.img`
  height: 100px;
  width: 80px;
`;

const CocktailName = styled.h3`
  font-size: 16px;
  color: black;
  padding: 1px;
  margin: 0;
`;

export default function CocktailList() {
  const [cocktails, setCocktails] = React.useState([]);

  async function refreshCocktails() {
    const searchedCocktails = await getCocktails("Moj");
    setCocktails(searchedCocktails);
  }

  React.useEffect(() => {
    refreshCocktails();
  });

  return (
    <CocktailTagList>
      {cocktails.map(cocktail => (
        <CocktailTag key={cocktail.idDrink}>
          <CocktailName>{cocktail.strDrink}</CocktailName>
          <CocktailImage src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        </CocktailTag>
      ))}
    </CocktailTagList>
  );
}
