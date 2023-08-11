import React from "react";
import "../styles/About.css";
import AboutImage from "../assets/slider6.jpeg";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: "url(" + AboutImage + ")" }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US </h1>
        <p>
          Whatever your goal, your passion, your desires, you are sure to find
          your happiness at FITNESS FIRST MAHDIA. Our team of qualified
          professionals will be able to support you day after day to help you
          achieve your goals and achieve the desired results. Make Sure You Get
          the Benefits Our bodies depend on a steady supply of vitamins,
          minerals, and other nutrients for good health throughout our lives.
          Yet it can be challenging to get all the essential nutrients we need
          from food alone. While dietary supplements cannot take the place of
          healthy eating habits, they can provide adequate amounts of essential
          nutrients when used responsibly. In fact, nearly 3 in 5 Americans use
          supplements each month to benefit their health. Dietary supplements
          can play a vital role in a healthy lifestyle, if you are a
          well-informed consumer. Here are some questions and answers on what
          you need to know to safely select and take dietary supplements.{" "}
        </p>
      </div>
    </div>
  );
}

export default About;
