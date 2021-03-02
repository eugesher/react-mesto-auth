import React from "react";
import classNames from "classnames";
import { handlePopupOverlayClick } from "../utils/utils";
import crossButtonIcon from "../images/cross.svg";
import { textContents } from "../utils/constants";
import PropTypes from "prop-types";

export default function InfoTooltip({ image, message, isOpen, onClose }) {
  InfoTooltip.propTypes = {
    image: PropTypes.string,
    message: PropTypes.string,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
  };

  const imageAlts = textContents.infoTooltip.imageAlts;

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
  }, [isOpen, onClose]); //todo: DRY

  return (
    <div
      className={classNames("popup", { popup_opened: isOpen })}
      onMouseDown={(event) => handlePopupOverlayClick(event, onClose)}
    >
      <div className="tooltip">
        <img src={image} alt={imageAlts.success} />
        <p className="tooltip__message">{message}</p>
        <button type="button" className="popup__close-button" onClick={onClose}>
          <img src={crossButtonIcon} alt="Закрыть" className="popup__close-button-image" />
        </button>
      </div>
    </div>
  );
}
