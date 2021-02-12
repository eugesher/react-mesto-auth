import React from "react";
import crossButtonIcon from "../images/cross.svg";
import { handlePopupOverlayClick } from "../utils/utils";

export default function ImagePopup({ card, onClose }) {
  const { name, link } = card;
  const isOpen = !!Object.keys(card).length;

  React.useEffect(() => {
    if (isOpen) {
      const handleEscapeClose = (event) => {
        if (event.key === "Escape") {
          onClose();
        }
      };
      document.addEventListener("keydown", handleEscapeClose);
      return () => {
        document.removeEventListener("keydown", handleEscapeClose);
      };
    }
  }, [isOpen, onClose]);

  return (
    <div
      className={`popup popup_type_photo-view ${isOpen && "popup_opened"}`}
      onClick={(event) => handlePopupOverlayClick(event, onClose)}
    >
      <div className="popup__content popup__content_type_image">
        <img src={link} alt={name} className="popup__image" />
        <p className="popup__image-caption">{name}</p>
        <button type="button" className="popup__close-button" onClick={onClose}>
          <img
            src={crossButtonIcon}
            alt="Закрыть"
            className="popup__close-button-image"
          />
        </button>
      </div>
    </div>
  );
}
