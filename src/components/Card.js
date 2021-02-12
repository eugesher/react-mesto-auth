import likeIcon from "../images/heart.svg";
import likeIconSolid from "../images/heart-solid.svg";
import deleteButton from "../images/trash.svg";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({ source, onClick, onCardLike }) {
  const { name, link, likes } = source;
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = currentUser._id === source.owner._id;
  const isLiked = likes.some((l) => l._id === currentUser._id);

  function handleImageClick() {
    const data = { name, link };
    onClick(data);
  }

  function handleLikeClick() {
    onCardLike(source);
  }

  return (
    <li className="card">
      <img
        src={link}
        alt={name}
        className="card__image"
        onClick={handleImageClick}
      />
      <div className="card__title-container">
        <h2 className="card__title">{name}</h2>
        <button
          type="button"
          className="card__like-button"
          onClick={handleLikeClick}
        >
          <img src={isLiked ? likeIconSolid : likeIcon} alt="Нравится" />
          <span className="card__like-count">{likes.length}</span>
        </button>
      </div>
      <button type="button" className="card__delete-button" disabled={!isOwn}>
        <img src={deleteButton} alt="Удалить место" />
      </button>
    </li>
  );
}
