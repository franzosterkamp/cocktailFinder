import React from "react";
import GlobalStyles from "./Globalstyles";
import Header from "./components/Header";
import CocktailList from "./components/CocktailList";
import { ThemeProvider } from "emotion-theming";
import themes from "./Themes";
import Footer from "./components/Footer";

function App() {
  const [input, setInput] = React.useState("");
  const [storage, setStorage] = React.useState([]);
  const [theme, setTheme] = React.useState(themes.default);

  function handleThemeClick() {
    if (theme === themes.default) {
      setTheme(themes.alt);
    } else {
      setTheme(themes.default);
    }
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header
          searchValue={storage}
          onClick={() => setInput(storage)}
          onValueChange={searchValue => {
            setStorage(searchValue);
          }}
        />
        <CocktailList searchValue={input} />
        <Footer onClick={handleThemeClick} />
      </ThemeProvider>
    </div>
  );
}

export default App;
