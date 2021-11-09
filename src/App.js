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

  console.log(quote);

  const tags =
    quote &&
    quote.tags &&
    quote.tags.map((tag, index) => {
      return (
        <li className="tag" key={index}>
          {tag}
        </li>
      );
    });
  return (
    <div className="App">
      <header>Random Quotes</header>
      <main>
        <div className="quote-container">
          <ul className="tags">{tags}</ul>
          <div className="quote">
            {quote.content} - {quote.author}
          </div>
        </div>
      </main>
      <button onClick={() => getQuote(endpoint)}>New Quote</button>

      <footer>@{year} - Made by Adrian Tut.</footer>
    </div>
  );
}

export default App;
