import PokemonMoves from "./components/ChainingOperator";
import Counter from "./components/Counter";

const App = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();
  const logWhenClicked = () => {
    console.log("Hi Baby");
  };
  return (
    <div>
      {/* <Logo appName="Pokedex" handleClick={logWhenClicked} />
      <BestPokemon name={abilities} />
      <CaughtPokemon dateProp={date} />
      <PokemonMoves />
      <PokemonCity />
      <ChangeState />
      <ShowData />
      <SimpleReminder />
      <CreateAccountForm /> */}

      {/* <PokemonMoves /> */}
      <Counter />
    </div>
  );
};

export default App;
