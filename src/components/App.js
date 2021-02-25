import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import { popupContents } from "../utils/constants";

export default function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

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
    [setIsEditAvatarPopupOpen, setIsEditProfilePopupOpen, setIsAddPlacePopupOpen].forEach((setState) =>
      setState(false)
    );
    setSelectedCard({});
  }

  function handleUpdateUser(values) {
    api
      .patchUserInfo(values)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function handleUpdateAvatar(link) {
    api
      .patchUserAvatar(link)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function handleAddPlace(values) {
    api
      .postCard(values)
      .then((data) => {
        setCards([data, ...cards]);
        closeAllPopups();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function handleCardLike(card) {
    function changeLikeCardStatus() {
      const isLiked = card.likes.some((l) => l._id === currentUser._id);
      return isLiked ? api.deleteCardLike(card._id) : api.putCardLike(card._id);
    }

    changeLikeCardStatus()
      .then((targetCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? targetCard : c));
        setCards(newCards);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__content">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            selectedCard={selectedCard}
            onCardClick={(imageLink) => handleCardClick(imageLink)}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            content={popupContents.editAvatar}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            content={popupContents.editProfile}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlace}
            content={popupContents.addPlace}
          />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}
