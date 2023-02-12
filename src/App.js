import logo from "./logo.svg";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import Wallet from "./components/Wallet";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";

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
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </div>
  );
}

export default App;
