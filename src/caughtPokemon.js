import { useState } from "react";

const CaughtPokemon = (prop) => {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  const catchPokemon = () => {
    if (pokemonNameInput !== "") {
      setCaught([...caught, pokemonNameInput]);
      setPokemonNameInput("");
    } else {
      alert("input is empty");
    }
    // setCaught(caught.concat("pokemon"));
  };

  const handleInputChange = (e) => {
    setPokemonNameInput(e.target.value);
  };

  return (
    <div>
      <p>
        Caught {caught.length} POkemon on {prop.dateProps}
      </p>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>catch</button>
      <ul>
        {caught.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
