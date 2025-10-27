// src/components/PhotoContainer.jsx
import React from "react";

const PhotoContainer = ({
  src,
  alt,
  size = "medium",
  shape = "circle",
  border = true,
  shadow = true,
  hoverEffect = true,
  className = "",
}) => {
  const containerClass = `photo-container ${size} ${shape} ${
    border ? "with-border" : ""
  } ${shadow ? "with-shadow" : ""} ${
    hoverEffect ? "with-hover" : ""
  } ${className}`;

  return (
    <div className={containerClass}>
      <img src={src} alt={alt} className="photo-image" />
      {shape === "circle" && <div className="photo-glow"></div>}
    </div>
  );
};

export default PhotoContainer;
