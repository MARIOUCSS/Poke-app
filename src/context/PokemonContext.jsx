import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useForm } from "../hook/useForm";

const appcontext = React.createContext();
//mandas
export const Exportcontext = () => {
  return useContext(appcontext);
};

const PokemonContext = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [globalPokemon, setGlobalPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  /// UTILIZAR -USE FORM
  //funcion que vouy a destructurar
  const { valueSearch, onImputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  /////Estados para la aplicacion simples

  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);
  ///////////////////
  //LLamar 50 pokemones a la Api
  const TotalPokemones = async (limit = 50) => {
    const baseurl = "https://pokeapi.co/api/v2/";
    const res = await fetch(
      `${baseurl}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();
    // console.log(data);
    //ojo este es una funcion asincrona dentro de un map
    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = res.json();
      return data;
    });

    const results = await Promise.all(promises);
    setAllPokemons([...allPokemons, ...results]);
  };

  //Llamar a Todos los Pokemones
  const GlobalPokemones = async () => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);

    setLoading(false);
    setGlobalPokemon(results);
    // setLoading(false);
  };

  //LLamar pokemon por id
  const getPokemonByID = async (id) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  //////////////////////
  useEffect(() => {
    TotalPokemones();
  }, [offset]);

  useEffect(() => {
    GlobalPokemones();
  }, []);

  const MasPokemones = () => {
    setOffset(offset + 50);
  };

  const [typeSelected, setTypeSelected] = useState({
    grass: false,
    normal: false,
    fighting: false,
    flying: false,
    poison: false,
    ground: false,
    rock: false,
    bug: false,
    ghost: false,
    steel: false,
    fire: false,
    water: false,
    electric: false,
    psychic: false,
    ice: false,
    dragon: false,
    dark: false,
    fairy: false,
    unknow: false,
    shadow: false,
  });

  const [filterPokemon, setFilterPokemon] = useState([]);

  const handChecknox = (e) => {
    setTypeSelected({
      ...typeSelected,
      [e.target.name]: e.target.checked,
    });
    //si es verdadero

    if (e.target.checked) {
      const filtrars = globalPokemon.filter((pokemon) =>
        pokemon.types.map((type) => type.type.name).includes(e.target.name)
      );
      console.log(filtrars);
      //primero esparcimos l que tengo fliterpokemon
      setFilterPokemon([...filterPokemon, ...filtrars]);
    }
  };
  return (
    <appcontext.Provider
      value={{
        valueSearch,
        onImputChange,
        // onResetForm,
        allPokemons,
        TotalPokemones,
        GlobalPokemones,
        getPokemonByID,
        globalPokemon,
        active,
        setActive,
        onResetForm,
        MasPokemones,
        handChecknox,
        filterPokemon,
        loading,
      }}
    >
      {children}
    </appcontext.Provider>
  );
};

export default PokemonContext;
