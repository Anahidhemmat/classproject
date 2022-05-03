import Logo from "./Logo.js";
import CaughtPokemon from "./caughtPokemon.js";
import BestPokemon from "./BestPokemon.js";
import PokemonMoves from "./pokemonMovies.js";
import PokemonCity from "./pokemonCity.js";
import ChangeState from "./changeState.js";
import ShowData from "./nasa.js";
import SimpleReminder from "./simpleReminder.js";

const App = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();
  const logWhenClicked = () => {
    console.log("Hi Baby");
  };
  return (
    <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked} />
      <BestPokemon name={abilities} />
      <CaughtPokemon dateProp={date} />
      <PokemonMoves />
      <PokemonCity />
      <ChangeState />
      <ShowData />
      <SimpleReminder />
    </div>
  );
};

export default App;
