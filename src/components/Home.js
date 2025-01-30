"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../css/home.css";
import "../App.css";

const Home = () => {
  return (
    <div className="container">
      <div className="content">
        {/* Border Wrapper */}
        <div className="glass-card-wrapper">
          {/* Clean Glass Card */}
          <div className="glass-card">
            <h1>Hi, I'm Ame Busang</h1>
            <p>
              I'm{" "}
              <TypeAnimation
                sequence={[
                  "a Developer",
                  1000,
                  "a Problem Solver",
                  1000,
                  "a Tech Enthusiast",
                  1000,
                  "a Creator",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </p>
          </div>
        </div>

        <div className="buttons">
          <button className="btn">About Me</button>
          <button className="btn">My Work</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
