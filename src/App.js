import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import Add from "./components/Add";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Watchlist />}></Route>
        <Route path="/watched" element={<Watched />}></Route>
        <Route path="/add" element={<Add />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
