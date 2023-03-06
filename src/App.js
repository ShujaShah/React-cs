import logo from "./logo.svg";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import Wallet from "./components/Wallet";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Assets from "./components/Assets";
import Calculator from "./components/Calculator";
import Contact from "./components/Contact";
import GetData from "./components/Fetch";
import GetUser from "./components/GetUser";

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
        <Link to="/contact-us" className="nav-item">
          Contact us
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/wallet" element={[<Wallet />, <Assets />]} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/fetch" element={[<GetData />, <GetUser />]} />
      </Routes>
    </div>
  );
}

export default App;
