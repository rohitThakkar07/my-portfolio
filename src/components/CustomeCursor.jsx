import React, { useEffect } from "react";
import './CustomeCursor.css';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="custom-cursor">
      <span className="dot"></span>
    </div>
  );
};

export default CustomCursor;