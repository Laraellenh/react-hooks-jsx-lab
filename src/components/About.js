import React from "react";
import { image } from "../data/data";


function About() {
  return (
  <div id="about">
    <h2> About Me </h2>
    <p>Check it out!</p>
    <img src={image} alt="I Made This" />
  </div>
  );
}

export default About;
