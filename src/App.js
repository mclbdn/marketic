// import "./App.css";
import "./styles/_main.scss";
import React, { useState, useEffect } from "react";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
  query Features {
    featuresCollection {
      items {
        featureDescription
        featureName
        featureImage {
          url
        }
      }
    }
  }
`;

function App() {
  const { data, errors, loading } = useQuery(QUERY);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    if (!loading) {
      console.log(data.featuresCollection.items);
      setFeatures(data.featuresCollection.items);
    }
  }, [loading]);

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
