import React from "react";
import PopupWithForm from "./PopupWithForm";
import { popupContents } from "../utils/constants";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const { titles, labels } = popupContents;
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
      title={titles.editProfile}
      submitButtonLabel={labels.save}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__input-container">
        <input
          id="user-name"
          name="name"
          type="text"
          minLength="2"
          maxLength="40"
          required
          className="popup__input popup__input_type_profile-name"
          value={formValues.name || ""}
          onChange={handleInputChange}
        />
        <span className="user-name-error popup__input-error" />
      </label>
      <label className="popup__input-container">
        <input
          id="user-about"
          name="about"
          type="text"
          minLength="2"
          maxLength="200"
          required
          className="popup__input popup__input_type_profile-about"
          value={formValues.about || ""}
          onChange={handleInputChange}
        />
        <span className="user-about-error popup__input-error" />
      </label>
    </PopupWithForm>
  );
}
