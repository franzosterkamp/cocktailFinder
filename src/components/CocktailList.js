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
  background-color: #fcef87;
  border-radius: 10px;
  margin: 5px;
  display: flex;
  flex-flow: column;
`;

const CocktailImage = styled.img`
  height: 150px;
  width: 120px;
  margin: 5px;
  border-radius: 5px;
`;

const CocktailName = styled.h3`
  font-size: 16px;
  color: black;
  text-align: center;
  padding: 1px;
  margin: 0;
`;

const CocktailDescription = styled.p`
  font-size: 0.8rem;
  color: black;
  margin: 2px;
  overflow: scroll;
`;

const noCocktail = "No Cocktails found !";

// console.log(handleSearch());

export default function CocktailList({ searchValue }) {
  const [cocktails, setCocktails] = React.useState([]);

  async function refreshCocktails() {
    const searchedCocktails = await getCocktails(searchValue);
    setCocktails(searchedCocktails);
    console.log(cocktails);
  }

  React.useEffect(() => {
    refreshCocktails();
  });

  if (cocktails == null) {
    return (
      <CocktailTagList>
        <CocktailTag key="1">
          <CocktailName>{noCocktail}</CocktailName>
        </CocktailTag>
      </CocktailTagList>
    );
  } else
    return (
      <CocktailTagList>
        {cocktails.map(cocktail => (
          <CocktailTag key={cocktail.idDrink}>
            <CocktailName>{cocktail.strDrink}</CocktailName>
            <CocktailImage
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
            />
            <CocktailDescription>
              {cocktail.strInstructionsDE}
            </CocktailDescription>
          </CocktailTag>
        ))}
      </CocktailTagList>
    );
}
