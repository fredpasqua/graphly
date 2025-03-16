import React, { useState, useEffect } from "react";
import "./RotatingBanner.css"; // Import the stylesheet

const RotatingBanner = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images]);

  if (!images || images.length === 0) {
    return <div className="no-images">No images provided.</div>;
  }

  return (
    <div className="rotating-banner">
      <img
        src={images[currentImageIndex]}
        alt={`Banner ${currentImageIndex + 1}`}
        className="banner-image"
      />
    </div>
  );
};

export default RotatingBanner;
