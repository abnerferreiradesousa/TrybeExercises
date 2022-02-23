import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
  // componentDidMount
  // useEffect(async () => {
  //   const { results } = await fetch(url)
  //     .then(response => response.json());
  //   setPokemons(results);
  // })

  // componentDidUpdate or shouldUpdated
  useEffect(async () => {
    const { results } = await fetch(url)
      .then(response => response.json());
    setPokemons(results);
  }, [limit]);


  // componentWillUmmount
  // useEffect(async () => {
  //   const { results } = await fetch(url)
  //     .then(response => response.json());
  //   setPokemons(results);

  //   return () => {};
  // }, [limit]);


  const handleMorePokemons = () => {
    setLimit(limit => limit + 10);
  }

  return (
    <div className="App">
      <ul>
        <button type="button" onClick={handleMorePokemons}>Buscar mais pokemons</button>
        {pokemons.map((pokemon) => (
          <li key={ pokemon.name }>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
