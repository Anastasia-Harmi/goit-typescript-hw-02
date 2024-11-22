import React, { FC } from "react";
import css from "./ImageCard.module.css";
import { Iphoto } from "../../types/Iphoto";
type Props = {
  photo: Iphoto;
  onClick: () => void;
};
const ImageCard: FC<Props> = ({ photo, onClick }) => {
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
