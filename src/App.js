import "./App.css";
import Home from "./Components/Home/Home"
import Inventory from "./Components/Inventory/Inventory"
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <h1>CarZone</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/inventory">Inventory</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory/*" element={<Inventory />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
