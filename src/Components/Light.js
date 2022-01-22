import React, { useState } from "react";

function Light() {
  const [color, setColor] = useState(false);
  const [color2, setColor2] = useState(false);
  let [Light, setLight] = useState(false);
  let [Light2, setLight2] = useState(false);
  let [isToggledOn, setToggle] = useState(false);
  let [isToggled1On, setToggle1] = useState(false);

  const toggle = function () {
    if (color) {
      setColor(false);
      setToggle(!isToggledOn);
    } else {
      setColor(true);
      setLight(!Light);
      setToggle(!isToggledOn);
    }
  };

  const toggle2 = function () {
    if (color2) {
      setColor2(false);
      setToggle1(!isToggled1On);
    } else {
      setColor2(true);
      setLight2(!Light2);
      setToggle1(!isToggled1On);
    }
  };

  return (
    <div>
      <div className="flex-container">
        <div className="flex-child magenta">
          <div
            style={{ backgroundColor: color ? "orange" : "#999999" }}
            className="circle circle1"
          ></div>
          <button className="btn" onClick={toggle}>
            {" "}
            {isToggledOn ? "ON" : "OFF"}
          </button>
        </div>

        <div className="flex-child green">
          <div
            style={{ backgroundColor: color2 ? "orange" : "#999999" }}
            className="circle"
          ></div>
          <button className="btn" onClick={toggle2}>
            {" "}
            {isToggled1On ? "ON" : "OFF"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Light;
