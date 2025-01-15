import React from "react";
import booksData from "../data/booksData"; // Ensure the path is correct
import ProductCard from "../Components/ProductCard";

const ProductPage = () => {
  console.log("BooksData:", booksData); // Debug: Ensure booksData is loaded correctly
  return (
    <div>
      <h1>Product Page</h1>
      <div>
        {booksData.map((book) => (
          <div key={book.id}>
            <ProductCard
              name={book.name} // Fixed title to match the data
              author={book.author}
              price={book.price}
              image={book.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
