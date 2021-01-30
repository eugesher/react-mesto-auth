import React from "react";
import crossButtonIcon from "../images/cross-button.svg";

export default function PopupWithForm(props) {
  const { children, name, title, submitButtonLabel, isOpen, onClose } = props;

  function handleOverlayClick(event) {
    event.target.classList.contains("popup") && onClose();
  }

  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`} onClick={handleOverlayClick}>
      <form name={name} noValidate className="popup__content">
        <h2 className="popup__title">{title}</h2>
        {children}
        <button type="submit" className="popup__submit-button">
          {submitButtonLabel}
        </button>
        <button type="button" className="popup__close-button" onClick={onClose}>
          <img src={crossButtonIcon} alt="Закрыть" className="popup__close-button-image"/>
        </button>
      </form>
    </div>
  );
}
