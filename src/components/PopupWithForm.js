import React from "react";
import crossButtonIcon from "../images/cross-button.svg";

export default function PopupWithForm(props) {
  const [isOpened, setIsOpened] = React.useState(false);
  const { children, name, title, submitButtonLabel } = props;

  return (
    <div className={`popup popup_type_${props.name}`}>
      <form name={name} noValidate className="popup__content">
        <h2 className="popup__title">{title}</h2>
        {children}
        <button type="submit" className="popup__submit-button">
          {submitButtonLabel}
        </button>
        <button type="button" className="popup__close-button">
          <img src={crossButtonIcon} alt="Закрыть" className="popup__close-button-image" />
        </button>
      </form>
    </div>
  );
}
