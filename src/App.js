import Home from "./components/Home/Home";
import Workshops from "./components/Research/Research";
import Gallery from "./components/Gallery/Gallery";
import Outreach from "./components/Outreach/Outreach";
import Teaching from "./components/Teaching/Teaching";
import Blog from "./components/Blog/Blog";
import Book from "./components/Book/Book";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/research" exact element={<Workshops />} />
            <Route path="/gallery" exact element={<Gallery />} />
            <Route path="/outreach" element={<Outreach />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/book" element={<Book />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
