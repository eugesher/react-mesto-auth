import React from "react";
import crossButtonIcon from "../images/cross.svg";
import { handlePopupOverlayClick } from "../utils/utils";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function PopupWithForm({ children, name, title, submitButtonLabel, isOpen, onClose, onSubmit }) {
  PopupWithForm.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
    title: PropTypes.string,
    submitButtonLabel: PropTypes.string,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
  };

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
      className={classNames("popup", `popup_type_${name}`, { popup_opened: isOpen })}
      onClick={(event) => handlePopupOverlayClick(event, onClose)}
    >
      <form name={name} noValidate className="popup__content" onSubmit={onSubmit}>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button type="submit" className="popup__submit-button">
          {submitButtonLabel}
        </button>
        <button type="button" className="popup__close-button" onClick={onClose}>
          <img src={crossButtonIcon} alt="Закрыть" className="popup__close-button-image" />
        </button>
      </form>
    </div>
  );
}
