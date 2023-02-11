function NumberGuesser() {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("Type a number");
    alert(`computer Guessed Number : ${randomNum}, Your Guess: ${userInput}`);
  }
  return (
    <div>
      <h1>Click on the below button and type in any number</h1>
      <button onClick={handleClick}>Guess the Number between 1 and 3</button>
    </div>
  );
}

export default NumberGuesser;
