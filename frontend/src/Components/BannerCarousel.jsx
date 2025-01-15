import React, { useState } from 'react';
import '../styles/BannerCarousel.css';

const BannerCarousel = () => {
  const banners = ["Discover the best books!", "Up to 50% off!", "Explore knowledge."];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="banner-carousel">
      <button onClick={() => setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length)}>&lt;</button>
      <h2>{banners[currentIndex]}</h2>
      <button onClick={() => setCurrentIndex((prev) => (prev + 1) % banners.length)}>&gt;</button>
    </div>
  );
};

export default BannerCarousel;
