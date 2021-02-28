import React from "react";
import PopupWithForm from "./PopupWithForm";
import PropTypes from "prop-types";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace, content }) {
  AddPlacePopup.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onAddPlace: PropTypes.func,
    content: PropTypes.object,
  };

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
      <label className="form__input-container">
        <input
          ref={nameInput}
          id="place-name"
          name="name"
          type="text"
          minLength="2"
          maxLength="30"
          required
          className="form__input"
          placeholder={content.namePlaceholder}
        />
        <span className="place-name-error form__input-error" />
      </label>
      <label className="form__input-container">
        <input
          ref={linkInput}
          id="place-link"
          name="link"
          type="url"
          required
          className="form__input"
          placeholder={content.linkPlaceholder}
        />
        <span className="place-link-error form__input-error" />
      </label>
    </PopupWithForm>
  );
}
