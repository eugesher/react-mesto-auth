import React from "react";
import crossButtonIcon from "../images/cross.svg";
import { handlePopupOverlayClick } from "../utils/utils";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function ImagePopup({ card, onClose }) {
  ImagePopup.propTypes = {
    card: PropTypes.object,
    onClose: PropTypes.func,
  };

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
      className={classNames("popup", { popup_opened: isOpen })}
      onMouseDown={(event) => handlePopupOverlayClick(event, onClose)}
    >
      <div className="popup__image-container">
        <img src={link} alt={name} className="popup__image" />
        <p className="popup__image-caption">{name}</p>
        <button type="button" className="popup__close-button" onClick={onClose}>
          <img src={crossButtonIcon} alt="Закрыть" className="popup__close-button-image" />
        </button>
      </div>
    </div>
  );
}
