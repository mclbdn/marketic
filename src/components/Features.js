import React from "react";
import SingleFeature from "./SingleFeature";

const Features = ({ features }) => {
  return (
    <section className="features-section" id="section-2">
      <h1>
        WE OFFER THE BEST SERVICES FOR OUR CUSTOMERS
      </h1>
      <div className="feature-container">
        {features.map((feature, index) => {
          return (
            <SingleFeature
              key={index}
              featureName={feature.featureName}
              featureDescription={feature.featureDescription}
              featureImage={feature.featureImage}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Features;
