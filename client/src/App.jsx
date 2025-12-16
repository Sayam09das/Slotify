import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomeRoutes from "./pages/HomeRoutes";
import BookRoutes from "./pages/BookRoutes";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeRoutes />} />
        <Route path="/book" element={<BookRoutes />} />
      </Routes>
    </div>
  );
};

export default App;
