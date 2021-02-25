import React from "react";
import editButtonIcon from "../images/pencil.svg";
import crossButtonIcon from "../images/cross.svg";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PropTypes from "prop-types";

export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  Main.propTypes = {
    onEditAvatar: PropTypes.func,
    onEditProfile: PropTypes.func,
    onAddPlace: PropTypes.func,
    onCardClick: PropTypes.func,
    onCardLike: PropTypes.func,
    onCardDelete: PropTypes.func,
    cards: PropTypes.array,
  };

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img className="profile__avatar" src={currentUser.avatar} alt="аватар профиля" />
          <div className="profile__avatar-overlay">
            <img className="profile__avatar-update-icon" src={editButtonIcon} alt="изменить аватар" />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button type="button" className="profile__edit-button" onClick={onEditProfile}>
            <img src={editButtonIcon} alt="редактировать профиль" />
          </button>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace}>
          <img src={crossButtonIcon} alt="добавить" className="profile__add-button-image" />
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
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}
