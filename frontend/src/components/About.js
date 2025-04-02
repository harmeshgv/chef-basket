import React from "react";

function About() {
  return (
    <section className="about" id="about">
      <h1>Today's Deal</h1>
      <div className="about-container">
        {/* Repeat this block for each item */}
        <div className="about-box">
          <div className="box-img">
            <img
              src="https://i.postimg.cc/TwS5bmvJ/about1.png"
              alt="Chicken and Eggs Salad"
            />
          </div>
          <h3>Chicken and Eggs Salad (Extra Portion)</h3>
          <h2>$ 14.99</h2>
        </div>
        {/* Add more items as needed */}
      </div>
    </section>
  );
}

export default About;
