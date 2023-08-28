import React, { useState } from "react";
import "./css/menu.css";
import Sidebars from "./menubar";
import CustomToggleButton from "./Toggle";
import CustomComponent from "./Application";
import Relavance from "./Relavance";
import RectanglesComponent from "./rectangles";
import Question from "./question";

const Frame = () => {
  return (
    <div className="outer">
      <div className="left-box">
        <Sidebars />
      </div>
      <div className="right-box">
        <RectanglesComponent />
        <CustomToggleButton className="toggle" />
        <div className="main">
          <CustomComponent />
          <Relavance />
        </div>
        <Question />
      </div>
    </div>
  );
};

export default Frame;
