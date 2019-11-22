export async function getCocktails(serachValue) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${serachValue}`
  );

  const data = await response.json();
  console.log(data);
  return data.results;
}
