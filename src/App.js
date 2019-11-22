import React from "react";
import GlobalStyles from "./Globalstyles";
import Header from "./components/Header";
import CocktailList from "./components/CocktailList";

function App() {
  function handleSearch(value) {
    console.log(value);
  }

  return (
    <div>
      <GlobalStyles />
      <Header onSearch={handleSearch} />
      <CocktailList />
    </div>
  );
}

export default App;
