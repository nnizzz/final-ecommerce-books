import React from 'react';
import BooksData from '../Data/BooksData'; // Ensure the correct path to your data
import '../Styles/Productpage.css'; // Ensure this file is properly imported

const ProductPage = () => {
  return (
    <div className="product-container">
      {BooksData.map((book) => (
        <div key={book.id} className="product-card">
          <img src={book.image} alt={book.name} className="product-image" />
          <h3 className="product-name">{book.name}</h3>
          <p className="product-author">{book.author}</p>
          <p className="product-price">{book.price}</p>
          <button className="buy-now">Buy Now</button>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
