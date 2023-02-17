import React from "react";
import { useLocation } from "react-router-dom";
import { Card } from "../Components/Card";
import { Exportcontext } from "../context/PokemonContext";
const SearchPage = () => {
  const location = useLocation();
  console.log(location);
  const { globalPokemon } = Exportcontext();
  const filtrarPokemon = globalPokemon.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );
  console.log(filtrarPokemon);
  return (
    <div className="container">
      <p className="p-searh">
        Se Encontraron <span>{filtrarPokemon.length}</span> Resultados:
      </p>
      <div className="card-list-pokemon container">
        {filtrarPokemon.map((pokemon) => (
          <Card pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
