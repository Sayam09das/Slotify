import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

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
import LearnMore from "./components/GetStarted/Home/LearnMore";

import AdminRoutes from "./pages/AdminRoutes/AdminRoutes";
import SlotRoutes from "./pages/AdminRoutes/SlotRoutes";

const App = () => {
  return (
    <Routes>
      {/* 🌍 Main site layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomeRoutes />} />
        <Route path="/book" element={<BookRoutes />} />
        <Route path="/how-it-works" element={<HowItsWorksRoutes />} />
        <Route path="/support" element={<SupportRoutes />} />
      </Route>

      {/* 🔐 Auth layout (NO Navbar/Footer) */}
      <Route element={<AuthLayout />}>
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/forgot-password" element={<Forgetpassword />} />
        <Route path="/otp-verification" element={<OTP />} />
        <Route path="/confrim-password" element={<ConfirmPAssword />} />
      </Route>

      <Route element={<AdminRoutes />}>
        <Route path="/admin/dashboard" element={<AdminRoutes />} />
      </Route>
      <Route element={<SlotRoutes />}>
        <Route path="/admin/slots" element={<SlotRoutes />} />
      </Route>
    </Routes >
  );
};

export default App;
