import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

export default function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
        <PopupWithForm name="editAvatar" title="Обновить аватар" submitButtonTextContent="Сохранить">
          <label className="popup__input-container">
            <input
              id="avatar-link"
              name="avatar"
              type="url"
              required
              className="popup__input popup__input_type_avatar-link"
              placeholder="https://somewebsite.com/someimage.jpg"
            />
            <span className="avatar-link-error popup__input-error" />
          </label>
        </PopupWithForm>
        <PopupWithForm name="editProfile" title="Редактировать профиль" submitButtonTextContent="Сохранить">
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
        <PopupWithForm name="addPlace" title="Новое место" submitButtonTextContent="Создать">
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
            <span className="place-name-error popup__input-error" />
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
            <span className="place-link-error popup__input-error" />
          </label>
        </PopupWithForm>
        <PopupWithForm name="removePlace" title="Вы уверены?" submitButtonTextContent="Да" />
        <ImagePopup/>
      </div>
    </div>
  );
}
