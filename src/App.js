import React from "react";
import GlobalStyles from "./Globalstyles";
import Header from "./components/Header";
import CocktailList from "./components/CocktailList";

function App() {
  const [input, setInput] = React.useState("");
  const [storage, setStorage] = React.useState([]);

  return (
    <div>
      <GlobalStyles />
      <Header
        searchValue={storage}
        onClick={() => setInput(storage)}
        onValueChange={searchValue => {
          setStorage(searchValue);
        }}
      />
      <CocktailList searchValue={input} />
    </div>
  );
}

export default App;
