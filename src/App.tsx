import React from "react";
import { Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Details from "./components/Details";
import Card from "./components/Card";

function App() {
  return (
    <Routes>
      <Route path="/create" element={<Create />} />
      <Route path="/hotels/:id" element={<Details />} />
      <Route path="/" element={<Card />} />
    </Routes>
  );
}

export default App;
