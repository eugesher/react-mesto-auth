import crossButtonIcon from "../images/cross-button.svg";
import { handlePopupOverlayClick } from "../utils/utils";

export default function ImagePopup(props) {
  const { card, onClose } = props;
  const { name, link } = card;

  return (
    <div
      className={`popup popup_type_photo-view ${!!Object.keys(card).length && "popup_opened"}`}
      onClick={(event) => handlePopupOverlayClick(event, onClose)}
    >
      <div className="popup__content popup__content_type_image">
        <img src={link} alt="#" className="popup__image" />
        <p className="popup__image-caption">{name}</p>
        <button type="button" className="popup__close-button" onClick={onClose}>
          <img src={crossButtonIcon} alt="Закрыть" className="popup__close-button-image" />
        </button>
      </div>
    </div>
  );
}
