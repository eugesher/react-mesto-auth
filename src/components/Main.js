import avatar from "../images/cousteau.jpg";
import editButtonIcon from "../images/edit-button.svg";
import crossButtonIcon from "../images/cross-button.svg";

export default function Main() {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={avatar} alt="аватар профиля"/>
          <div className="profile__avatar-overlay">
            <img
              className="profile__avatar-update-icon"
              src={editButtonIcon}
              alt="изменить аватар"
            />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Profile Name</h1>
          <button type="button" className="profile__edit-button">
            <img src={editButtonIcon} alt="редактировать профиль"/>
          </button>
          <p className="profile__about">Profile about</p>
        </div>
        <button type="button" className="profile__add-button">
          <img src={crossButtonIcon} alt="добавить" className="profile__add-button-image"/>
        </button>
      </section>
      <section className="places">
        <ul className="places__grid"></ul>
      </section>
    </main>
  )
}