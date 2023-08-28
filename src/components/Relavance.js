import React from "react";
import "./css/relavance.css";
const Relavance = () => {
  return (
    <div className="custom-component">
      <h1 className="main-title">Relavance to subject:</h1>
      <div className="component-row">
        <div className="content-cell">
          <div className="content-details">
            <h2 className="secondary-title">Point 1</h2>
            <div className="description">
              Lorem ipsum dolor sit amet . Lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
              dolor sit amet, consectetur.{" "}
            </div>
          </div>
        </div>
        <div className="others-cell">
          <h3>Other Content</h3>
          <br />
          <div className="sub-content-column">
            <h4>Point 1</h4>
            <div className="sub-description">
              Lorem ipsum dolor sit ametLorem ipsum dolor sit amet.
            </div>
            <br />
            <h4>Point 2</h4>
            <div className="sub-description">
              Lorem ipsum dolor sit ametLorem ipsum dolor sit amet.
            </div>
            <br />
            <h4>Point 3</h4>
            <div className="sub-description">
              Lorem ipsum dolor sit ametLorem ipsum dolor sit amet. Lorem ipsum
              dolor sit amet . Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consectetur.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relavance;
