import "./App.css";

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="App">
      <header>Random Quotes</header>
      <main>Quote</main>
      <footer>@{year} - Made by Adrian Tut</footer>
    </div>
  );
}

export default App;
