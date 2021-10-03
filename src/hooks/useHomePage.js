import axios from "axios";
import { useState } from "react";
import { cloneDeep } from "lodash";
export const useHomePage = () => {
  const [pokemonList, setPokemonList] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [numberOfCards, setNumberOfCards] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const getPokemonList = (limit = 20) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
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

  const getNextPokemonList = (url) => {
    axios
      .get(url)
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

  const getPreviousPokemonList = (url) => {
    axios
      .get(url)
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

  const searchPokemons = (event) => {
    let _pokemonList = cloneDeep(pokemonList);

    if (event.target.value) {
      let searchedPokemonList = pokemonList.results.filter((ele) =>
        ele.name.includes(event.target.value)
      );
      _pokemonList.results = searchedPokemonList;
      setPokemonList(_pokemonList);
    } else {
      numberOfCards ? getPokemonList(numberOfCards) : getPokemonList();
    }
  };

  const sortPokemonBy = () => {
    let _pokemonList = cloneDeep(pokemonList);

    _pokemonList.results.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    setPokemonList(_pokemonList);
  };

  return {
    getPokemonList,
    getPokemonDetails,
    getPreviousPokemonList,
    getNextPokemonList,
    pokemonList,
    pokemonDetails,
    numberOfCards,
    setNumberOfCards,
    sortBy,
    setSortBy,
    searchPokemons,
    sortPokemonBy,
  };
};
