import headerLogo from "./images/header-logo.svg";
import avatar from "./images/cousteau.jpg";
import editButtonIcon from "./images/edit-button.svg";
import crossButtonIcon from "./images/cross-button.svg";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <header className="header">
          <img src={headerLogo} alt="Место" className="header__logo"/>
        </header>
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
        <footer className="footer">
          <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
        </footer>
        <div className="popup popup_type_profile-edit">
          <form name="profileEdit" noValidate className="popup__content">
            <h2 className="popup__title">Редактировать профиль</h2>
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
              <span className="user-name-error popup__input-error"></span>
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
              <span className="user-about-error popup__input-error"></span>
            </label>
            <button type="submit" className="popup__submit-button">Сохранить</button>
            <button type="button" className="popup__close-button">
              <img src={crossButtonIcon} alt="Закрыть" className="popup__close-button-image"/>
            </button>
          </form>
        </div>
        <div className="popup popup_type_add-place">
          <form name="placeAdd" noValidate className="popup__content">
            <h2 className="popup__title">Новое место</h2>
            <label className="popup__input-container">
              <input
                id="place-name"
                name="name"
                type="text"
                minLength="2"
                maxLength="30"
                required
                className="popup__input popup__input_type_place-name"
                placeholder="Название"
              />
              <span className="place-name-error popup__input-error"></span>
            </label>
            <label className="popup__input-container">
              <input
                id="place-link"
                name="link"
                type="url"
                required
                className="popup__input popup__input_type_place-link"
                placeholder="Ссылка на картинку"
              />
              <span className="place-link-error popup__input-error"></span>
            </label>
            <button type="submit" className="popup__submit-button">Создать</button>
            <button type="button" className="popup__close-button">
              <img src={crossButtonIcon} alt="Закрыть" className="popup__close-button-image"/>
            </button>
          </form>
        </div>
        <div className="popup popup_type_photo-view">
          <div className="popup__content popup__content_type_image">
            <img src="#" alt="#" className="popup__image"/>
            <p className="popup__image-caption"></p>
            <button type="button" className="popup__close-button">
              <img src={crossButtonIcon} alt="Закрыть" className="popup__close-button-image"/>
            </button>
          </div>
        </div>
        <div className="popup popup_type_avatar-update">
          <form name="avatarUpdate" noValidate className="popup__content">
            <h2 className="popup__title">Обновить аватар</h2>
            <label className="popup__input-container">
              <input
                id="avatar-link"
                name="avatar"
                type="url"
                required
                className="popup__input popup__input_type_avatar-link"
                placeholder="https://somewebsite.com/someimage.jpg"
              />
              <span className="avatar-link-error popup__input-error"></span>
            </label>
            <button type="submit" className="popup__submit-button">Сохранить</button>
            <button type="button" className="popup__close-button">
              <img src={crossButtonIcon} alt="Закрыть" className="popup__close-button-image"/>
            </button>
          </form>
        </div>
        <div className="popup popup_type_confirm">
          <form className="popup__content">
            <h2 className="popup__title">Вы уверены?</h2>
            <button type="submit" className="popup__submit-button popup__submit-button_type_confirm">Да</button>
            <button type="button" className="popup__close-button">
              <img src={crossButtonIcon} alt="Закрыть" className="popup__close-button-image"/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
