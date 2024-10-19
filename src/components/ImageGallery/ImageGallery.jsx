import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
const ImageGallery = ({ photos, onImageClick }) => {
  return (
    <div>
      <ul className={css.list}>
        {photos !== null &&
          photos.map((photo) => {
            return (
              <ImageCard
                key={photo.id}
                id={photo.id}
                photo={photo}
                onClick={() => onImageClick(photo.urls.full)}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default ImageGallery;
