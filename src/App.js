import logo from "./logo.svg";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import Wallet from "./components/Wallet";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Assets from "./components/Assets";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/register" className="nav-item">
          Eat
        </Link>
        <Link to="/wallet" className="nav-item">
          Wallet
        </Link>
        <Link to="/calculator" className="nav-item">
          Calculator
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/wallet" element={[<Wallet />, <Assets />] } />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
