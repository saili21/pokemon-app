import React, { useEffect } from "react";
import { useHomePage } from "../hooks/useHomePage";
import PokemonCard from "./PokemonCard";
import { Grid, Typography } from "@mui/material";

export default function HomePage() {
  const { getPokemonList, pokemonList } = useHomePage();
  useEffect(() => {
    getPokemonList();
  }, []);
  return (
    <React.Fragment>
      <Grid container item justifyContent="center" style={{ marginBottom: 20 }}>
        <Typography variant="h5">Pokemon List</Typography>
      </Grid>
      {pokemonList && pokemonList.results.length ? (
        <Grid container spacing={2} style={{ marhinTop: 20 }}>
          {pokemonList.results.map((data) => (
            <Grid item xs={12} md={4} lg={3}>
              <PokemonCard name={data.name} detailsURL={data.url} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body2" color="text.secondary">
          No Pokemons!!
        </Typography>
      )}
    </React.Fragment>
  );
}
