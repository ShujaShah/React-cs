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

function App() {
  // return (
  // <div className="blog-page">
  //   <div class="header">
  //     <Navbar />
  //   </div>
  //   <div className="header">
  //     <Intro1 name="shuja" />
  //   </div>
  //   <div className="header">
  //     <Intro2 course="Web Development" />
  //   </div>
  //   <div className="header">
  //     <Intro3 app="React App" />
  //   </div>
  //   <div className="header">
  //     <Button />
  //   </div>
  //   <div className="header">
  //     <ModeToggler />
  //   </div>
  //   <div className="header">
  //     <NumberGuesser />
  //   </div>
  //   <div className="footer">
  //     <Footer />
  //   </div>
  // </div>
  return (
    <div>
      <RegisterForm />;
      <StateHandling />
    </div>
  );
}

export default App;
