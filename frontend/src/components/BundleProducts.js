import React, { useState, useEffect } from "react";
import "./BundleProducts.css"; // Ensure this CSS file exists

const BundleProducts = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch the main product data
    fetch(`${process.env.PUBLIC_URL}/productdetail.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const mainProduct = data[0]; // Assuming only one product
        const itemIds = mainProduct.items; // Get the items array

        // Fetch the bundle products data
        fetch(`${process.env.PUBLIC_URL}/Bundleproducts.json`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((bundleData) => {
            // Filter the bundle products based on the item IDs
            const filtered = bundleData.filter((product) =>
              itemIds.includes(product.id)
            );
            setFilteredProducts(filtered);
          })
          .catch((error) =>
            console.error("Error fetching bundle products:", error)
          );
      })
      .catch((error) => console.error("Error fetching main product:", error));
  }, []);

  return (
    <div className="shopping-cart">
      <div className="column-labels">
        <label className="product-image">Image</label>
        <label className="product-details">Product</label>
        <label className="product-price">Price</label>
        <label className="product-quantity">Quantity</label>
        <label className="product-removal">Remove</label>
        <label className="product-line-price">Total</label>
      </div>

      {filteredProducts.map((product, index) => (
        <div className="product" key={index}>
          <div className="product-image">
            <img
              src={`${process.env.PUBLIC_URL}${product.image}`}
              alt={product.name}
            />
          </div>
          <div className="product-details">
            <div className="product-title">{product.name}</div>
            <p className="product-description">{product.description}</p>
          </div>
          <div className="product-price">{product.price}</div>
          <div className="product-quantity">
            <input type="number" value="1" min="1" />
          </div>
          <div className="product-removal">
            <button className="remove-product">Remove</button>
          </div>
          <div className="product-line-price">10.00</div>
        </div>
      ))}

      <div className="totals">
        <div className="totals-item">
          <label>Subtotal</label>
          <div className="totals-value" id="cart-subtotal">
            10.00
          </div>
        </div>
        <div className="totals-item">
          <label>Tax (5%)</label>
          <div className="totals-value" id="cart-tax">
            0.50
          </div>
        </div>
        <div className="totals-item">
          <label>Shipping</label>
          <div className="totals-value" id="cart-shipping">
            5.00
          </div>
        </div>
        <div className="totals-item totals-item-total">
          <label>Grand Total</label>
          <div className="totals-value" id="cart-total">
            15.50
          </div>
        </div>
      </div>

      <button className="checkout">Checkout</button>
    </div>
  );
};

export default BundleProducts;
