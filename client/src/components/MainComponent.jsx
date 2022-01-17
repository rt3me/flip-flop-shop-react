import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import RequireAuth from "./routes/RequireAuth";
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

class Main extends Component {
  render() {
    return (
      <div>
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
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;
