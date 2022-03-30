import React, { useEffect, useState } from 'react';
// import useAbility from './Hooks/useAbility';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  // const [abilities, setPokeUrl] = useAbility();
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

  const handleMorePokemons = () => {
    setLimit(limit => limit + 10);
  }

  // componentWillUmmount
  // useEffect(async () => {
  //   const { results } = await fetch(url)
  //     .then(response => response.json());
  //   setPokemons(results);

  //   return () => {};
  // }, [limit]);



  return (
    <div className="App">
      <ul>
        <button type="button" onClick={handleMorePokemons}>Buscar mais pokemons</button>
        {pokemons.map(({ name }) => (
          <li key={ name }>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
