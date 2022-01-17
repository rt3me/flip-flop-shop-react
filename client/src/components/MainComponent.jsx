import React, { Component } from "react";
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
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="checkout/success" element={<CheckoutSuccess />} />
          <Route path="checkout/cancel" element={<CheckoutCancel />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;
