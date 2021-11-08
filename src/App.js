import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState({});
  const year = new Date().getFullYear();

  useEffect(() => {
    // get a quote on load
    getQuote(endpoint);
  }, []);

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

  const endpoint = "https://api.quotable.io/random";

  console.log(quote.tags);

  return (
    <div className="App">
      <header>Random Quotes</header>
      <main>
        <div className="quote-container">
          <div className="tags">{quote.tags}</div>
          <div className="quote">
            {quote.content} - {quote.author}
          </div>
        </div>
      </main>
      <footer>@{year} - Made by Adrian Tut.</footer>
    </div>
  );
}

export default App;
