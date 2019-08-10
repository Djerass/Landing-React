import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Showcase from "./components/Showcase/Showcase";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Gallery2 from "./components/Gallery2/Gallery2";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <About />
      <Gallery2 />
      <Footer />
    </div>
  );
}

export default App;
