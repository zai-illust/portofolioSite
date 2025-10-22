import React, { useState, useEffect } from "react";

function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "assets/images/slideShow/1.jpg",
    "assets/images/slideShow/2.jpg",
    "assets/images/slideShow/3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="slideShow">
      <img
        src={images[currentIndex]}
        alt="slideshow"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

// ✅ これがないと "does not provide an export named 'default'" エラーになる
export default SlideShow;
