import React from "react";
import { Link } from "react-router-dom";

function Shop() {
  return (
    <section className="shop" id="shop">
      <div className="heading">
        <h2>
          🥗 Chef Basket – Cook Like a Chef with Ready-to-Use Ingredient Kits!
        </h2>
        <p>
          Say goodbye to grocery lists! Our <strong>Chef Baskets</strong>{" "}
          include all the fresh, pre-measured ingredients you need to cook
          restaurant-quality meals at home. Just pick a dish, order its basket,
          and start cooking—no hassle, no waste!
          <br /> 🍛 Authentic Ingredients | Perfectly Portioned | Easy & Fun
          Cooking
          <br />
          👉 Select Your Chef Basket & Start Your Cooking Journey!
        </p>
      </div>
      <div className="shop-container">
        <Link to="/product">
          <div className="shop-box">
            <div className="shop-img">
              <img
                src={`${process.env.PUBLIC_URL}/images/fruit_salad.jpg`}
                alt="Fruit Salad Ingredient Basket"
              />
            </div>
            <h3>Fruit Salad 🍓 Ingredient Basket</h3>
            <p>Includes fresh fruits, dark chocolate, honey, and nuts.</p>
            <h2>₹ 9.99</h2>
            <i className="bx bxs-cart-add"></i>
          </div>
        </Link>

        <Link to="/product">
          <div className="shop-box">
            <div className="shop-img">
              <img
                src={`${process.env.PUBLIC_URL}/images/paneer_butter_masala.jpg`}
                alt="Paneer Butter Masala Ingredient Basket"
              />
            </div>
            <h3>Paneer Butter Masala 🧀 Ingredient Basket</h3>
            <p>Includes paneer, tomatoes, cream, butter, and spices.</p>
            <h2>₹ 9.99</h2>
            <i className="bx bxs-cart-add"></i>
          </div>
        </Link>

        <Link to="/product">
          <div className="shop-box">
            <div className="shop-img">
              <img
                src={`${process.env.PUBLIC_URL}/images/chicken-mandhi-briyani.jpg`}
                alt="Chicken Mandhi Briyani Ingredient Basket"
              />
            </div>
            <h3>Chicken Mandhi Biryani 🍗 Ingredient Basket</h3>
            <p>
              Includes basmati rice, marinated chicken, saffron, and spices.
            </p>
            <h2>₹ 9.99</h2>
            <i className="bx bxs-cart-add"></i>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Shop;
