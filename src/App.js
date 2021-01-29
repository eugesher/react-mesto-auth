import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src="<%=require('./images/header-logo.svg')%>" alt="Место" className="header__logo"/>
      </header>
      <main className="main">
        <section className="profile">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src="#" alt="аватар профиля"/>
            <div className="profile__avatar-overlay">
              <img
                className="profile__avatar-update-icon"
                src="<%=require('./images/edit-button.svg')%>"
                alt="изменить аватар"
              />
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <button type="button" className="profile__edit-button">
              <img src="<%=require('./images/edit-button.svg')%>" alt="редактировать профиль"/>
            </button>
            <p className="profile__about"></p>
          </div>
          <button type="button" className="profile__add-button">
            <img src="<%=require('./images/cross-button.svg')%>" alt="добавить" className="profile__add-button-image"/>
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
            <img src="<%=require('./images/cross-button.svg')%>" alt="Закрыть" className="popup__close-button-image"/>
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
            <img src="<%=require('./images/cross-button.svg')%>" alt="Закрыть" className="popup__close-button-image"/>
          </button>
        </form>
      </div>
      <div className="popup popup_type_photo-view">
        <div className="popup__content popup__content_type_image">
          <img src="#" alt="#" className="popup__image"/>
          <p className="popup__image-caption"></p>
          <button type="button" className="popup__close-button">
            <img src="<%=require('./images/cross-button.svg')%>" alt="Закрыть" className="popup__close-button-image"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
