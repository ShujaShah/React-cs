import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";


function App() {
  return (
    <div className="blog-page">
      <div class="header"><Navbar /></div>
      <div class="header"><Intro1 /></div>
      <div class="header"><Intro2 /></div>
      <div class="header"><Intro3 /></div>
      <div class="footer"><Footer /></div>
    </div>
  );
}

export default App;
