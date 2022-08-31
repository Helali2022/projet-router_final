//import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Contact from "./Pages/Contact.js";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          const params = useParams(); console.log(params)
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <h1>afficher cette page pour toute adresse incorrecte (404)</h1>
            }
          />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
