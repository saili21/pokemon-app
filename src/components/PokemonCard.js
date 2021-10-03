import React, { useEffect } from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useHomePage } from "../hooks/useHomePage";
import PokemonAbilities from "./PokemonAbilities";

export default function PokemonCard({ name, detailsURL }) {
  const { getPokemonDetails, pokemonDetails } = useHomePage();

  useEffect(() => {
    getPokemonDetails(detailsURL);
  }, []);
  return (
    <Card style={{ minHeight: 450 }}>
      <CardContent>
        <img
          src={
            pokemonDetails &&
            pokemonDetails.sprites.other["official-artwork"].front_default
          }
          height="200"
          width="200"
        ></img>
        <Typography gutterBottom variant="h5" component="div">
          Name: {name}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          Height: {pokemonDetails && pokemonDetails.height}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          Weight: {pokemonDetails && pokemonDetails.weight}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          List of abilities:
          <PokemonAbilities
            abilities={pokemonDetails && pokemonDetails.abilities}
          />
        </Typography>
      </CardContent>
    </Card>
  );
}
