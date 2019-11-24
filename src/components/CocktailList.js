import React from "react";
import styled from "@emotion/styled";
import cross from "../assets/close.svg";
import { getCocktails } from "../api/cocktails";

const CocktailTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CocktailTag = styled.div`
  height: 400px;
  width: 200px;
  background-color: #fcef87;
  border-radius: 7px;
  margin: auto;
  margin-top: 20px;
  padding: 8px;
  display: flex;
  flex-flow: column;
  box-shadow: 10px 10px 7px -9px rgba(0, 0, 0, 0.75);
`;

const CocktailImage = styled.img`
  height: 40%;
  justify-self: center;
  width: 90%;
  margin: auto;
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
  margin-top: 5px;
  color: black;
  padding: 2px;
  overflow: scroll;
  height: 30%;
  background-color: #f5c342;
  border-radius: 5px;
  box-shadow: 10px 10px 7px -9px rgba(0, 0, 0, 0.75);
`;

const CocktailDataList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 30%;
  margin: 5px 0px;
`;
const Tag = styled.button`
  font-size: 0.8rem;
  color: black;
  outline: none;
  padding: 0px 2px;
  margin: 2px;
  background-color: #f9db49;
  border-radius: 5px;
  border: none;
  height: 1.5rem;
  box-shadow: 10px 10px 7px -9px rgba(0, 0, 0, 0.75);
`;

const NoCocktailImage = styled.img``;

const noCocktail = "No Cocktails found !";

// console.log(handleSearch());

export default function CocktailList({ searchValue }) {
  const [cocktails, setCocktails] = React.useState([]);

  async function refreshCocktails() {
    const searchedCocktails = await getCocktails(searchValue);
    setCocktails(searchedCocktails);
  }

  React.useEffect(() => {
    refreshCocktails();
  });

  if (cocktails == null) {
    return (
      <CocktailTagList>
        <CocktailTag key="1">
          <CocktailName>{noCocktail}</CocktailName>
          <NoCocktailImage src={cross}></NoCocktailImage>
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
            <CocktailDataList>
              <Tag>{cocktail.strIngredient1}</Tag>
              <Tag>{cocktail.strIngredient2}</Tag>
              <Tag>{cocktail.strIngredient3}</Tag>
              <Tag>{cocktail.strIngredient4}</Tag>
              <Tag>{cocktail.strIngredient5}</Tag>
            </CocktailDataList>
            <CocktailDescription>
              {cocktail.strInstructionsDE}
            </CocktailDescription>
          </CocktailTag>
        ))}
      </CocktailTagList>
    );
}
