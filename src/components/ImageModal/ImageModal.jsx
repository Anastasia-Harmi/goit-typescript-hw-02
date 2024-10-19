import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import css from "./ImageModal.module.css";

// Налаштування стилю для модального вікна
Modal.setAppElement("#root"); // Для доступності

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
        content: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          background: "transparent",
        },
      }}
    >
      {image && <img className={css.image} src={image} alt="Large view" />}
    </Modal>
  );
};

export default ImageModal;
