import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = {
    id,
    title: `Sample Book ${id}`,
    author: 'John Doe',
    description: 'This is a detailed description of the book.',
    price: 19.99,
    image: '/path/to/image.jpg',
  };

  const handleAddToCart = () => {
    alert(`Added "${product.title}" to cart!`);
  };

  return (
    <div className="product-detail-page">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <h3>Author: {product.author}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetailPage;
