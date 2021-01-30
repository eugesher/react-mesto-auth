import React from "react";
import editButtonIcon from "../images/edit-button.svg";
import crossButtonIcon from "../images/cross-button.svg";
import api from "../utils/api";
import Card from "./Card";

export default function Main(props) {
  const { onEditAvatar, onEditProfile, onAddPlace, onCardClick } = props;
  const [userId, setUserId] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userAbout, setUserAbout] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        const { _id, name, about, avatar } = data;
        setUserId(_id);
        setUserName(name);
        setUserAbout(about);
        setUserAvatar(avatar);
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
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="аватар профиля" />
          <div className="profile__avatar-overlay">
            <img className="profile__avatar-update-icon" src={editButtonIcon} alt="изменить аватар" />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" className="profile__edit-button" onClick={onEditProfile}>
            <img src={editButtonIcon} alt="редактировать профиль" />
          </button>
          <p className="profile__about">{userAbout}</p>
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
                isUserOwn={userId === cardData.owner._id}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}
