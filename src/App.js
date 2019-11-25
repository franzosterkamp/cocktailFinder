import React from "react";
import GlobalStyles from "./Globalstyles";
import Header from "./components/Header";
import CocktailList from "./components/CocktailList";

function App() {
  const [input, setInput] = React.useState("Gin");

  return (
    <div>
      <GlobalStyles />
      <Header
        searchValue={input}
        onValueChange={searchValue => setInput(searchValue)}
      />
      <CocktailList searchValue={input} />
    </div>
  );
}

export default App;
