import crossButtonIcon from "../images/cross-button.svg";

export default function ImagePopup() {
  return (
    <div className="popup popup_type_photo-view">
      <div className="popup__content popup__content_type_image">
        <img src="#" alt="#" className="popup__image" />
        <p className="popup__image-caption" />
        <button type="button" className="popup__close-button">
          <img src={crossButtonIcon} alt="Закрыть" className="popup__close-button-image" />
        </button>
      </div>
    </div>
  );
}
