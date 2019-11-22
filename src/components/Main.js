import React from "react";
import styled from "@emotion/styled";

import { getCocktails } from "../api/cocktails";

const CocktailTag = styled.div`
  display: flex;
`;

const CocktailImage = styled.img``;

export default function CocktailList() {
  const [cocktails, setCocktails] = React.useState([]);

  async function refreshCocktails() {
    const searchedCocktails = await getCocktails("Moj");
    setCocktails(searchedCocktails);
  }

  return (
    <CocktailTag>
      {cocktails.map(cocktail => (
        <div key={cocktail.id}>
          <CocktailImage src={cocktail.img} alt={cocktail.title} />
        </div>
      ))}
    </CocktailTag>
  );
}
