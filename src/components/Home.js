import Footer from "./Footer";
import Intro1 from "./Intro1";
import Intro2 from "./Intro2";
import Intro3 from "./Intro3";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="blog-page">
      {/* <div class="header">
        <Navbar />
      </div> */}
      <div class="header">
        <Intro1 name="shuja" />
      </div>
      <div class="header">
        <Intro2 course="Web Development" />
      </div>
      <div class="header">
        <Intro3 app="React App" />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
