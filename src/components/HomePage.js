import React, { useEffect } from "react";
import { useHomePage } from "../hooks/useHomePage";
import PokemonCard from "./PokemonCard";
import { Button, Grid, Typography } from "@mui/material";

export default function HomePage() {
  const {
    getPokemonList,
    getNextPokemonList,
    getPreviousPokemonList,
    pokemonList,
  } = useHomePage();
  useEffect(() => {
    getPokemonList();
  }, []);
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
            <Grid item xs={12} md={4} lg={3}>
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
