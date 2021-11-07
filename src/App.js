import "./App.css";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState({});
  const year = new Date().getFullYear();

  const getQuote = async (path) => {
    try {
      await fetch(path)
        .then((result) => result.json())
        .then((result) => {
          setQuote(result);
        });
    } catch (error) {
      console.log("Failed to retrieve the quote: " + error);
    }
  };
  // console.log(quote);
  const endpoint = "https://api.quotable.io/random";

  getQuote(endpoint);

  return (
    <div className="App">
      <header>Random Quotes</header>
      <main>
        <div className="quote-container">quote</div>
      </main>
      <footer>@{year} - Made by Adrian Tut.</footer>
    </div>
  );
}

export default App;
