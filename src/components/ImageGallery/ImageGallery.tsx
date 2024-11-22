import React, { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Iphoto } from "../../types/Iphoto";

type Props = {
  photos: Iphoto[];
  onImageClick: (image: string) => void;
};
const ImageGallery: FC<Props> = ({ photos, onImageClick }) => {
  return (
    <div>
      <ul className={css.list}>
        {photos?.map((photo) => {
          console.log(photo);

          return (
            <ImageCard
              key={photo.id}
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
