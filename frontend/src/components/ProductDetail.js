import React, { useState, useEffect } from "react";
import "./Product.css"; // Ensure you have appropriate styles
import Bundle from "./BundleProducts";

const ProductDetail = () => {
  const [basket, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product data from the JSON file
    fetch(`${process.env.PUBLIC_URL}/productdetail.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProduct(data[0])) // Assuming only one product
      .catch((error) => console.error("Error fetching product:", error));
  }, []);

  if (!basket) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="card-wrapper">
        <div className="card">
          {/* Card Left */}
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img src={basket.image} alt={basket.name} />
              </div>
            </div>
          </div>

          {/* Card Right */}
          <div className="product-content">
            <h2 className="product-title">{basket.name}</h2>
            <div className="product-price">
              <p className="last-price">
                Old Price: <span>${basket.oldPrice}</span>
              </p>
              <p className="new-price">
                New Price: <span>${basket.price}</span>
              </p>
            </div>
            <div className="product-detail">
              <h2>About this item:</h2>
              <p>{basket.description}</p>
              <ul>
                <li>
                  Available:{" "}
                  <span>{basket.stock > 0 ? "In stock" : "Out of stock"}</span>
                </li>
                <li>
                  Category: <span>Food</span>
                </li>
                <li>
                  Shipping Area: <span>Worldwide</span>
                </li>
                <li>
                  Shipping Fee: <span>Free</span>
                </li>
              </ul>
            </div>
            <div className="purchase-info">
              <input
                type="number"
                min="1"
                max={basket.stock}
                defaultValue="1"
              />
              <button className="btn">Add to Cart 🛒</button>
              <button className="btn">Compare</button>
            </div>
          </div>
        </div>
      </div>
      <Bundle />
    </>
  );
};

export default ProductDetail;
