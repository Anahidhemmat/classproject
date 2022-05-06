import React, { useState } from "react";

const PokemonMoves = () => {
  const [isTrue, setIsTrue] = useState(null);

  const stateClickHandler = () => {
    return !isTrue ? setIsTrue(["hi", "baby"]) : setIsTrue(null);
  };

  return (
    <div>
      <button onClick={stateClickHandler}>change state</button>
      <ul>
        {/* {isTrue?.map((item, i) => (
          <li key={i}>{item}</li>
        ))} */}

        {isTrue && isTrue.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
};

export default PokemonMoves;
