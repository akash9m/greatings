//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";
var date = new Date();
var time = date.getHours();
var selutation;
var customstyle = { color: "" };
if (time < 12) {
  selutation = "Good morning";
  customstyle.color = "green";
} else if (time < 18) {
  selutation = "Good afternoon";
  customstyle.color = "blue";
} else {
  selutation = "Good evening";
  customstyle.color = "red";
}
ReactDOM.render(
  <div>
    <h1 className="heading" style={customstyle}>
      {selutation}
    </h1>
  </div>,
  document.getElementById("root")
);
