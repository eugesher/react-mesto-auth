import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlace,
  content,
}) {
  const nameInput = React.useRef();
  const linkInput = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    onAddPlace({
      name: nameInput.current.value,
      link: linkInput.current.value,
    });
  }

  React.useEffect(() => {
    if (!isOpen)
      [nameInput, linkInput].forEach((input) => {
        input.current.value = "";
      });
  }, [isOpen]);

  return (
    <PopupWithForm
      name="addPlace"
      title={content.title}
      submitButtonLabel={content.submitLabel}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__input-container">
        <input
          ref={nameInput}
          id="place-name"
          name="name"
          type="text"
          minLength="2"
          maxLength="30"
          required
          className="popup__input popup__input_type_place-name"
          placeholder={content.namePlaceholder}
        />
        <span className="place-name-error popup__input-error" />
      </label>
      <label className="popup__input-container">
        <input
          ref={linkInput}
          id="place-link"
          name="link"
          type="url"
          required
          className="popup__input popup__input_type_place-link"
          placeholder={content.linkPlaceholder}
        />
        <span className="place-link-error popup__input-error" />
      </label>
    </PopupWithForm>
  );
}
