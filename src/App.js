import React from "react";
import "./App.css";
import "./assets/css/style.css";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroSection />
      <About />
      <Project />
      <SignUp />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
