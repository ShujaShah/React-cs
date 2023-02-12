import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import Button from "./components/button";
import ModeToggler from "./components/ModeToggler";
import NumberGuesser from "./components/NumberGuesser";
import RegisterForm from "./components/RegisterForm";
import StateHandling from "./components/StateHandling";
import Wallet from "./components/wallet";

function App() {
  return (
    <div>
      <RegisterForm />;
      <StateHandling />
      <Wallet />
    </div>
  );
}

export default App;
