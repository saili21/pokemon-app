import { Typography } from "@mui/material";
import React from "react";

export default function PokemonAbilities({ abilities }) {
  return (
    <>
      {abilities && abilities.length ? (
        <ol>
          {abilities.map((ele) => (
            <li key={ele.slot}>{ele.ability.name}</li>
          ))}
        </ol>
      ) : (
        <Typography gutterBottom variant="body1" component="div">
          No Abilities listed!!
        </Typography>
      )}
    </>
  );
}
