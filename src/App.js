import Home from "./components/Home/Home";
import Workshops from "./components/Workshops/Workshops";
import Events from "./components/Events/Events";
import Team from "./components/Team/Team";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contacts/Contacts";
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
            <Route path="/workshops" exact element={<Workshops />} />
            <Route path="/events" exact element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
