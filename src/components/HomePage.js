import React, { useEffect } from "react";
import { useHomePage } from "../hooks/useHomePage";
import PokemonCard from "./PokemonCard";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

export default function HomePage() {
  const {
    getPokemonList,
    getNextPokemonList,
    getPreviousPokemonList,
    pokemonList,
    numberOfCards,
    setNumberOfCards,
    sortBy,
    setSortBy,
    searchPokemons,
    sortPokemonBy,
  } = useHomePage();
  useEffect(() => {
    getPokemonList();
  }, []);

  useEffect(() => {
    if (numberOfCards) {
      getPokemonList(numberOfCards);
    }
  }, [numberOfCards]);

  const handleChange = (event) => {
    setNumberOfCards(event.target.value);
  };

  const handleSort = (event) => {
    setSortBy(event.target.value);
    sortPokemonBy();
  };

  return (
    <React.Fragment>
      <Grid container item justifyContent="center" style={{ marginBottom: 20 }}>
        <Typography variant="h5">Pokemon List</Typography>
      </Grid>

      {pokemonList && pokemonList.results.length ? (
        <Grid
          container
          spacing={2}
          style={{ backgroundColor: "#D3D3D3", padding: 20 }}
        >
          <Grid container item xs={12} spacing={3}>
            <Grid container item xs={3}>
              <TextField
                onChange={searchPokemons}
                label="Search by name and abilities"
              ></TextField>
            </Grid>
            <Grid container item xs={2}>
              <FormControl fullWidth>
                <InputLabel id="sort-by-label">Sort By</InputLabel>
                <Select
                  labelId="sort-by-label"
                  id="sort-by-select"
                  value={sortBy}
                  label="Sort By"
                  onChange={handleSort}
                >
                  <MenuItem value={"name"}>Name</MenuItem>
                  <MenuItem value={"height"}>Height</MenuItem>
                  <MenuItem value={"weight"}>Weight</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select number of cards
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={numberOfCards}
                  label="Select number  of cards"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            container
            item
            justifyContent="center"
            style={{ marginBottom: 20 }}
          >
            <Button
              disabled={!pokemonList.previous}
              onClick={() => getPreviousPokemonList(pokemonList.previous)}
            >
              Back
            </Button>
            <Button
              disabled={!pokemonList.next}
              onClick={() => getNextPokemonList(pokemonList.next)}
            >
              Next
            </Button>
          </Grid>
          {pokemonList.results.map((data) => (
            <Grid key={data.name} item xs={12} md={4} lg={3}>
              <PokemonCard name={data.name} detailsURL={data.url} />
            </Grid>
          ))}
          <Grid
            container
            item
            justifyContent="center"
            style={{ marginBottom: 20 }}
          >
            <Button
              disabled={!pokemonList.previous}
              onClick={() => getPreviousPokemonList(pokemonList.previous)}
            >
              Back
            </Button>
            <Button
              disabled={!pokemonList.next}
              onClick={() => getNextPokemonList(pokemonList.next)}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="body2" color="text.secondary">
          No Pokemons!!
        </Typography>
      )}
    </React.Fragment>
  );
}
