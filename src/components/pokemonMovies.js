import React from "react";
import { useState, useEffect } from "react";

function PokemonMoves() {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPokemonData(data);
      });
  }, []);

  return (
    <div>
      {pokemonData ? (
        <div>
          <p>{pokemonData.name}'s moves </p>
          <ul>
            {pokemonData.moves.map((move, index) => (
              <li key={index}>{move.move.name}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default PokemonMoves;
