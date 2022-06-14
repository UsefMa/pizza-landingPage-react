import React from "react";
import "./App.css";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/product/Product";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <Contact />
    </>
  );
}

export default App;
