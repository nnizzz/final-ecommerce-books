import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import SignupPage from './pages/SignupPage';
import CartPage from './Pages/CartPage';
import ProductPage from "./Pages/ProductPage";
const AppRoutes = () => {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<HomePage />} />

      {/* Product Details Page */}
      <Route path="/product/:id" element={<ProductDetailPage />} />

      {/* Checkout Page */}
      <Route path="/checkout" element={<CheckoutPage />} />

      {/* Signup Page */}
      <Route path="/signup" element={<SignupPage />} />

      {/* Product Page */}
      <Route path="/Product" element={<ProductPage />} />

      {/* CartPage */}
      <Route path="/Cart" element={<CartPage />} />

      {/* Fallback for unmatched routes */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
