import React from "react";
import PopupWithForm from "./PopupWithForm";
import PropTypes from "prop-types";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, content }) {
  EditAvatarPopup.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onUpdateAvatar: PropTypes.func,
    content: PropTypes.object,
  };

  const linkInput = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateAvatar({ avatar: linkInput.current.value });
  }

  React.useEffect(() => {
    if (!isOpen) linkInput.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      name="editAvatar"
      title={content.title}
      submitButtonLabel={content.submitLabel}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="form__input-container">
        <input
          ref={linkInput}
          id="avatar-link"
          name="avatar"
          type="url"
          required
          className="form__input"
          placeholder={content.placeholder}
        />
        <span className="avatar-link-error form__input-error" />
      </label>
    </PopupWithForm>
  );
}
