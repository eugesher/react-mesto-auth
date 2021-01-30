import likeButton from "../images/like-button.svg";
import deleteButton from "../images/delete-button.svg";
import React from "react";

export default function Card(props) {
  const { source, onClick, isUserOwn } = props;
  const { name, link, likes } = source;

  function handleImageClick() {
    const data = { name, link };
    onClick(data);
  }

  return (
    <li className="card">
      <img src={link} alt="#" className="card__image" onClick={handleImageClick} />
      <div className="card__title-container">
        <h2 className="card__title">{name}</h2>
        <button type="button" className="card__like-button">
          <img src={likeButton} alt="Нравится" />
          <span className="card__like-count">{likes.length}</span>
        </button>
      </div>
      <button type="button" className="card__delete-button" disabled={!isUserOwn}>
        <img src={deleteButton} alt="Удалить место" />
      </button>
    </li>
  );
}
