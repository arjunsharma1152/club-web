import React from "react";
import "./photos.scss";

const Photos = ({ imageUrl }) => (
  <div className="container1">
    <img src={imageUrl} />
  </div>
);

export default Photos;
