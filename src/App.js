// import "./App.css";
import "./styles/_main.scss"
import React, { useState, useEffect } from "react";
import { client } from "./client";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [features, setFeatures] = useState([]);

  // Fetch data from Contentful API
  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        // console.log(response.items);
        setFeatures(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <Hero />
      <Features features={features} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
