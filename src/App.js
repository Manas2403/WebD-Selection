import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
