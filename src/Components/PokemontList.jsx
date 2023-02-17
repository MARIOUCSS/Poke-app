import React from "react";
import { Exportcontext } from "../context/PokemonContext";
import { Card } from "./Card";
import Loadd from "./Loadd";
const PokemontList = () => {
  const { loading, allPokemons, filterPokemon } = Exportcontext();

  return (
    <>
      {loading ? (
        <Loadd />
      ) : (
        <div className="card-list-pokemon container">
          {filterPokemon.length ? (
            <>
              {filterPokemon.map((pokemon) => (
                // <kartpo pokemon={pokemon} key={pokemon.id} />
                <Card pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          ) : (
            <>
              {allPokemons.map((pokemon) => (
                // <kartpo pokemon={pokemon} key={pokemon.id} />
                <Card pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default PokemontList;
