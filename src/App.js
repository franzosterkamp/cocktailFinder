import React from "react";
import GlobalStyles from "./Globalstyles";
import Header from "./components/Header";
import CocktailList from "./components/Main";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <CocktailList />
    </div>
  );
}

export default App;
