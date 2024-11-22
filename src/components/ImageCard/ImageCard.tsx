import React from "react";
import css from "./ImageCard.module.css";

const ImageCard = ({ photo, onClick }) => {
  return (
    <>
      <li className={css.item} key={photo.id} id={photo.id}>
        <img onClick={onClick} src={photo.urls.small} alt={photo.description} />
        <p>Likes: {photo.likes}</p>
      </li>
    </>
  );
};

export default ImageCard;
