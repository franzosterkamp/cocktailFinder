import React from "react";
import GlobalStyles from "./Globalstyles";
import Header from "./components/Header";
import CocktailList from "./components/CocktailList";

function App() {
  const [Input, setInput] = React.useState("Gin");

  function handleSearch(value) {
    setInput(value);
  }

  return (
    <div>
      <GlobalStyles />
      <Header onSearch={handleSearch} inputValue={Input} />
      <CocktailList searchValue={Input} />
    </div>
  );
}

export default App;
