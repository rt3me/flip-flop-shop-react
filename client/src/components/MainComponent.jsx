import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import Login from "./LoginComponent";
import Register from "./RegisterComponent";
import CheckoutSuccess from "./CheckoutSuccessComponent";
import CheckoutCancel from "./CheckoutCancelComponent";
import Account from "./AccountComponent";
import FrugalPlan from "./FrugalPlanComponent";
import FunLovingPlan from "./FunLovingPlanComponent";
import FancyPantsPlan from "./FancyPantsPlanComponent";
import { useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();

  console.log("location.pathname:", location.pathname);

  return (
    <div className={location.pathname === "/" ? "home-page-container" : "page-container"}>
      <Header />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/checkout/success"
          element={
            // <RequireAuth>
            <CheckoutSuccess />
            // </RequireAuth>
          }
        />
        <Route
          path="/checkout/cancel"
          element={
            // <RequireAuth>
            <CheckoutCancel />
            // </RequireAuth>
          }
        />
        <Route path="/account" element={<Account />} />
        <Route path="/frugal" element={<FrugalPlan />} />
        <Route path="/fun-loving" element={<FunLovingPlan />} />
        <Route path="/fancy-pants" element={<FancyPantsPlan />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
