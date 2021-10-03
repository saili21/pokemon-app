import axios from "axios";
import { useState } from "react";

export const useHomePage = () => {
  const [pokemonList, setPokemonList] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState(null);

  const getPokemonList = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then(function (response) {
        console.log("Pokemon List:", response.data);
        if (response.status === 200) {
          setPokemonList(response.data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const getPokemonDetails = (url) => {
    axios
      .get(url)
      .then(function (response) {
        console.log("Pokemon Deatils:", response.data);
        if (response.status === 200) {
          setPokemonDetails(response.data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  return {
    getPokemonList,
    getPokemonDetails,
    pokemonList,
    pokemonDetails,
  };
};
