import React from "react";
import successImage from "../images/success.svg";
import classNames from "classnames";
import { handlePopupOverlayClick } from "../utils/utils";
import crossButtonIcon from "../images/cross.svg";
import { textContents } from "../utils/constants";
import PropTypes from "prop-types";

export default function InfoTooltip({ isOpen, onClose }) {
  InfoTooltip.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
  };

  const imageAlts = textContents.infoTooltip.imageAlts;
  const messages = textContents.infoTooltip.messages;

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
        <img src={successImage} alt={imageAlts.success} />
        <p className="tooltip__message">{messages.success}</p>
        <button type="button" className="popup__close-button" onClick={onClose}>
          <img src={crossButtonIcon} alt="Закрыть" className="popup__close-button-image" />
        </button>
      </div>
    </div>
  );
}
