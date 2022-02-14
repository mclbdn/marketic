import React from "react";
import SingleFeature from "./SingleFeature";

const Features = ({ features }) => {
  return (
    <section className="features-section">
      <h1>
        WE OFFER THE BEST SERVICES FOR OUR CUSTOMERS
      </h1>
      <div className="feature-container">
        {features.map((feature, index) => {
          return (
            <SingleFeature
              key={index}
              featureName={feature.fields.featureName}
              featureDescription={feature.fields.featureDescription}
              featureImage={feature.fields.featureImage}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Features;
