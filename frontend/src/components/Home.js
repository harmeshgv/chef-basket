import React from "react";
import About from "./About";
import Shop from "./Shop";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="home-text">
          <span>Welcome to </span>
          <h1>
            Chef Basket Collection!
            <br />
          </h1>
          <p>
            Discover our carefully curated bundles of fresh ingredients,
            perfectly measured to help you cook delicious meals with ease. With
            just one click, get everything you need to create restaurant-quality
            dishes at home!
          </p>
        </div>
        <div className="home-img">
          <img
            src={`${process.env.PUBLIC_URL}/images/front.png`}
            alt="fresh salad"
          />{" "}
        </div>
      </section>
      <About />
      <Shop />
      <Contact />
    </>
  );
}

export default Home;
