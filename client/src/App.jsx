import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomeRoutes from "./pages/HomeRoutes";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeRoutes />} />
      </Routes>
    </div>
  );
};

export default App;
