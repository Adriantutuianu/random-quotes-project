import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  const year = new Date().getFullYear();

  useEffect(() => {
    // get a quote on load
    getQuote(endpoint);
  }, []);

  const getQuote = async (path) => {
    setLoading(true);
    try {
      await fetch(path)
        .then((result) => result.json())
        .then((result) => {
          setQuote(result);
        });
    } catch (error) {
      console.log("Failed to retrieve the quote: " + error);
    }
    setLoading(false);
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
        {loading ? (
          "Loading, please wait..."
        ) : (
          <div className="quote-container">
            <button
              className="new-quote-btn"
              onClick={() => getQuote(endpoint)}
            >
              New Quote
            </button>
            <ul className="tags">{tags}</ul>
            <div className="quote">
              {quote.content} - {quote.author}
            </div>
          </div>
        )}
      </main>

      <footer>@{year} - Made by Adrian Tut.</footer>
    </div>
  );
}

export default App;
