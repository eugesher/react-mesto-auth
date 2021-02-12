import React from "react";
import editButtonIcon from "../images/pencil.svg";
import crossButtonIcon from "../images/cross.svg";
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
}) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    function changeLikeCardStatus() {
      const isLiked = card.likes.some((l) => l._id === currentUser._id);
      return isLiked ? api.deleteCardLike(card._id) : api.putCardLike(card._id);
    }

    changeLikeCardStatus()
      .then((targetCard) => {
        const newCards = cards.map((c) =>
          c._id === card._id ? targetCard : c
        );
        setCards(newCards);
      })
      .catch((e) => {
        console.log(e);
      });
  }

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
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="аватар профиля"
          />
          <div className="profile__avatar-overlay">
            <img
              className="profile__avatar-update-icon"
              src={editButtonIcon}
              alt="изменить аватар"
            />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            type="button"
            className="profile__edit-button"
            onClick={onEditProfile}
          >
            <img src={editButtonIcon} alt="редактировать профиль" />
          </button>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        >
          <img
            src={crossButtonIcon}
            alt="добавить"
            className="profile__add-button-image"
          />
        </button>
      </section>
      <section className="places">
        <ul className="places__grid">
          {cards.map((cardData) => {
            return (
              <Card
                key={cardData._id}
                source={cardData}
                onClick={(cardData) => onCardClick(cardData)}
                onCardLike={handleCardLike}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}
