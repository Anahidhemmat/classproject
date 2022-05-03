import { useState } from "react";

function ChangeState() {
  const [isTrue, setIsTrue] = useState(null);

  const stateClickHandler = () => {
    !isTrue ? setIsTrue(["Hi"]) : setIsTrue(null);
  };

  return (
    <div>
      <button onClick={stateClickHandler}>Change State</button>
      {/* {isTrue?.map((x, i) => (
        <p key={i}>{x}</p>
      ))} */}
      {isTrue && isTrue.map((x, i) => <p key={i}>{x}</p>)}
    </div>
  );
}

export default ChangeState;
