import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PropTypes from "prop-types";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser, content }) {
  EditProfilePopup.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onUpdateUser: PropTypes.func,
    content: PropTypes.object,
  };

  const currentUser = React.useContext(CurrentUserContext);
  const [formValues, setFormValues] = React.useState({});

  function handleInputChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser(formValues);
  }

  React.useEffect(() => {
    setFormValues({
      name: currentUser.name,
      about: currentUser.about,
    });
  }, [currentUser]);

  return (
    <PopupWithForm
      name="editProfile"
      title={content.title}
      submitButtonLabel={content.submitLabel}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="form__input-container">
        <input
          id="user-name"
          name="name"
          type="text"
          minLength="2"
          maxLength="40"
          required
          className="form__input"
          value={formValues.name || ""}
          onChange={handleInputChange}
        />
        <span className="user-name-error form__input-error" />
      </label>
      <label className="form__input-container">
        <input
          id="user-about"
          name="about"
          type="text"
          minLength="2"
          maxLength="200"
          required
          className="form__input form__input_type_profile-about"
          value={formValues.about || ""}
          onChange={handleInputChange}
        />
        <span className="user-about-error form__input-error" />
      </label>
    </PopupWithForm>
  );
}
