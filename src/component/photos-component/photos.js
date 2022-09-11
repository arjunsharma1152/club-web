import React from "react";
import "./photos.scss";

const Photos = ({ imageUrl }) => (
  <div className="container1">
    <img className="img" src={imageUrl} />
  </div>
);

export default Photos;
