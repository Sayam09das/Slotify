import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomeRoutes from "./pages/HomeRoutes";
import BookRoutes from "./pages/BookRoutes";
import SupportRoutes from "./pages/SupportRoutes";
import HowItsWorksRoutes from "./pages/HowItsWorksRoutes";
import AdminLogin from "./Auth/AdminLogin";
import UserLogin from "./Auth/UserLogin";
import UserRegister from "./Auth/UserRegister";
import Forgetpassword from "./Auth/Forgetpassword";
import OTP from "./Auth/OTP";
import ConfirmPAssword from "./Auth/ConfirmPAssword";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeRoutes />} />
        <Route path="/book" element={<BookRoutes />} />
        <Route path="/how-it-works" element={<HowItsWorksRoutes />} />
        <Route path="/support" element={<SupportRoutes />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/otp-verification" element={<OTP />} />
        <Route path="/confrim-password" element={<ConfirmPAssword />} />
      </Routes>
    </div>
  );
};

export default App;
