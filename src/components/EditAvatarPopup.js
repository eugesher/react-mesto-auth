import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, content }) {
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
      <label className="popup__input-container">
        <input
          ref={linkInput}
          id="avatar-link"
          name="avatar"
          type="url"
          required
          className="popup__input popup__input_type_avatar-link"
          placeholder={content.placeholder}
        />
        <span className="avatar-link-error popup__input-error" />
      </label>
    </PopupWithForm>
  );
}
