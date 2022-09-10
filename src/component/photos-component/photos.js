import React from "react";
import "./photos.scss";

const Photos = ({ imageUrl }) => (
  <div className="container">
    <img src={imageUrl} />
  </div>
);

export default Photos;
