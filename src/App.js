import PokemonMoves from "./components/ChainingOperator";

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

      <PokemonMoves />
    </div>
  );
};

export default App;
