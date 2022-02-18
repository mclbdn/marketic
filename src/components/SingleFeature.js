import React from "react";

const SingleFeature = ({ featureName, featureDescription, featureImage }) => {
  return(
    <div className="single-feature-container">
      <img src={featureImage.url} alt={featureName} />
      <h1>{featureName}</h1>
      <p>{featureDescription}</p>
    </div>
  )
};

export default SingleFeature;
