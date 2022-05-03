const BestPokemon = (prop) => {
  return (
    <div>
      <p>My favorite pokemon is Squirtle</p>
      <ul>
        {prop.name.map((ability, i) => (
          <li key={i}>{ability}</li>
        ))}
      </ul>
    </div>
  );
};
export default BestPokemon;
