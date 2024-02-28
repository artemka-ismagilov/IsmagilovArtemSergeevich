import { useState } from "react";
import "./index.css";
import Header from "./components/Header/Header";
import { Route, Routes, Link } from "react-router-dom";
import Timer from "./pages/Timer/Timer";
import Home from "./pages/Home";
import Stopwatch from "./pages/Stopwatch/Stopwatch";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
      </Routes>
    </div>
  );
}

export default App;
