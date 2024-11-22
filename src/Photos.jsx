import React from "react";
import "./Photos.css"; // Import your custom CSS file

const Photos = () => {
  const handleClick = (image) => {
    // Opens the clicked image in a new tab
    window.open(image, "_blank");
  };

  return (
    <div className="Gallery">
      <img
        src="lyn.jpg"
        alt="Image 1"
        onClick={() => handleClick("me5.jpg")}
        className="image-thumbnail"
      />
      <img
        src="lyn2.jpg"
        alt="Image 2"
        onClick={() => handleClick("me2.jpg")}
        className="image-thumbnail"
      />
      <img
        src="lyn3.jpg"
        alt="Image 3"
        onClick={() => handleClick("chilsi 1.jpg")}
        className="image-thumbnail"
      />
      <img
        src="lyn4.jpg"
        alt="Image 4"
        onClick={() => handleClick("chilsi 2.jpg")}
        className="image-thumbnail"
      />
      <img
        src="lyn5.jpg"
        alt="Image 5"
        onClick={() => handleClick("chilsi 3.jpg")}
        className="image-thumbnail"
      />
      <img
        src="lyn6.jpg"
        alt="Image 6"
        onClick={() => handleClick("chilsi 4.jpg")}
        className="image-thumbnail"
      />
      <img
        src="lyn7.jpg"
        alt="Image 7"
        onClick={() => handleClick("chilsi 5.jpg")}
        className="image-thumbnail"
      />
      <img
        src="lyn8.jpg"
        alt="Image 8"
        onClick={() => handleClick("chilsi 6.jpg")}
        className="image-thumbnail"
      />

    </div>
  );
};

export default Photos;
