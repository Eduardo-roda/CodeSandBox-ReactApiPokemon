import "./styles.css";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const [results, setresults] = useState({});

  const fetchUser = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
    const data = await response.json();
    setresults(data);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Buscador de Pokemons</h1>
        <div className="grid">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="ingrese el nombre de pokemon"
          />
        </div>
        <div>
          <button onClick={fetchUser}>Buscar</button>
        </div>
        <article>
          <div className="container">
            <img
              src={results.sprites.other.dream_world.front_default}
              alt="avatar"
            />
            <h4>pokemon: {results.name}</h4>
            <p>Peso : {results.weight} KG</p>
          </div>
        </article>
      </div>
    </div>
  );
}
