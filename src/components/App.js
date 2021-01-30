import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {popupContents} from "../utils/constants";

export default function App() {
  const { titles, labels, placeholders } = popupContents;
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(cardData) {
    setSelectedCard(cardData);
  }
  function closeAllPopups() {
    [setIsEditAvatarPopupOpen, setIsEditProfilePopupOpen, setIsAddPlacePopupOpen].forEach(setState => setState(false));
    setSelectedCard({});
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          selectedCard={selectedCard}
          onCardClick={(imageLink) => handleCardClick(imageLink)}
        />
        <Footer />
        <PopupWithForm
          name="editAvatar"
          title={titles.editAvatar}
          submitButtonLabel={labels.save}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__input-container">
            <input
              id="avatar-link"
              name="avatar"
              type="url"
              required
              className="popup__input popup__input_type_avatar-link"
              placeholder={placeholders.avatarLink}
            />
            <span className="avatar-link-error popup__input-error" />
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="editProfile"
          title={titles.editProfile}
          submitButtonLabel={labels.save}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
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
            />
            <span className="user-about-error popup__input-error" />
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="addPlace"
          title={titles.addPlace}
          submitButtonLabel={labels.create}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__input-container">
            <input
              id="place-name"
              name="name"
              type="text"
              minLength="2"
              maxLength="30"
              required
              className="popup__input popup__input_type_place-name"
              placeholder={placeholders.placeName}
            />
            <span className="place-name-error popup__input-error" />
          </label>
          <label className="popup__input-container">
            <input
              id="place-link"
              name="link"
              type="url"
              required
              className="popup__input popup__input_type_place-link"
              placeholder={placeholders.placeLink}
            />
            <span className="place-link-error popup__input-error" />
          </label>
        </PopupWithForm>
        <PopupWithForm name="removePlace" title={titles.confirm} submitButtonLabel={labels.confirm} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </div>
    </div>
  );
}
