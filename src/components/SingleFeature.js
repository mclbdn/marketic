import React from "react";

const SingleFeature = ({ featureName, featureDescription, featureImage }) => {
  console.log("INSIDE SINGLE FEATURE")
  console.log(featureName, featureDescription, featureImage);
  return(
    <div className="single-feature-container">
      <img src={featureImage.fields.file.url} alt={featureName} />
      <h1>{featureName}</h1>
      <p>{featureDescription}</p>
    </div>
  )
};

export default SingleFeature;
