import React from 'react';
import '../Styles/CartPage.css';

const CartPage = () => {
  const cartItems = [
    { id: 1, title: 'Book 1', price: 10, quantity: 2 },
    { id: 2, title: 'Book 2', price: 15, quantity: 1 },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: ${calculateTotal()}</h3>
          <button>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
