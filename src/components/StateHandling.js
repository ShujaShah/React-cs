import React, { useState } from "react";

function StateHandling() {
  const [word, setWord] = React.useState("Eat ");

  function clickHandler() {
    if (word == "Eat ") {
      setWord("Drink ");
    } else setWord("Eat ");
  }

  return (
    <div>
      <h1>{word + "at Little Lemon"}</h1>
      <button onClick={clickHandler}>click me !</button>
    </div>
  );
}
export default StateHandling;
