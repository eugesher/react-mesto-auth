import crossButtonIcon from "../images/cross-button.svg";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header/>
        <Main/>
        <Footer/>
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
