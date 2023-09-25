// CartPage.jsx

import React, { useState } from 'react';
import '../assets/css/CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Book Title 1',
      price: 20.0,
      quantity: 2,
    },
    {
      id: 2,
      title: 'Book Title 2',
      price: 15.0,
      quantity: 1,
    },
    {
      id: 3,
      title: 'Book Title 3',
      price: 25.0,
      quantity: 3,
    },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const updateQuantity = (id, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-container">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-image">
              <img
                src={`https://m.media-amazon.com/images/I/51jRBz6Ug3L.jpgtext=${item.title}`} // Replace with actual book cover image URL
                alt={item.title}
              />
            </div>
            <div className="item-details">
              <h3 className="item-title">{item.title}</h3>
              <p className="item-price">${item.price.toFixed(2)}</p>
              <div className="quantity">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
