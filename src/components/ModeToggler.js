function ModeToggler() {
  let darkModeOn = false;
  const darkMode = <h1>Dark Mode is On !</h1>;
  const lightMode = <h1>Light Mode is On !</h1>;

  function handleClick() {
    darkModeOn = !darkModeOn;

    if (darkModeOn == true) {
      console.log("Dark Mode is ON");
    } else {
      console.log("Light Mode is ON");
    }
  }

  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handleClick}> Toggle </button>
    </div>
  );
}

export default ModeToggler;
