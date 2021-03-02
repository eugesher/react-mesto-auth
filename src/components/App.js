import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import { textContents } from "../utils/constants";
import Register from "./Register";
import classNames from "classnames";
import Login from "./Login";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import InfoTooltip from "./InfoTooltip";
import ProtectedRoute from "./ProtectedRoute";
import { authorize, register, checkToken } from "../utils/auth";
import successImage from "../images/success.svg";
import failImage from "../images/fail.svg";

function App({ history }) {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [infoTooltip, setInfoToolTip] = React.useState({ image: "", caption: "", isOpen: false });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(cardData) {
    setSelectedCard(cardData);
  }

  function closeAllPopups() {
    [setIsEditAvatarPopupOpen, setIsEditProfilePopupOpen, setIsAddPlacePopupOpen].forEach((setState) =>
      setState(false)
    );
    setSelectedCard({});
    setInfoToolTip({ isOpen: false });
  }

  function handleUpdateUser(values) {
    api
      .patchUserInfo(values)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((e) => {
        console.error(e);
      });
  }

  function handleUpdateAvatar(link) {
    api
      .patchUserAvatar(link)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((e) => {
        console.error(e);
      });
  }

  function handleAddPlace(values) {
    api
      .postCard(values)
      .then((data) => {
        setCards([data, ...cards]);
        closeAllPopups();
      })
      .catch((e) => {
        console.error(e);
      });
  }

  function handleCardLike(card) {
    function changeLikeCardStatus() {
      const isLiked = card.likes.some((l) => l._id === currentUser._id);
      return isLiked ? api.deleteCardLike(card._id) : api.putCardLike(card._id);
    }

    changeLikeCardStatus()
      .then((targetCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? targetCard : c));
        setCards(newCards);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  function handleRegister(email, password) {
    register(email, password)
      .then(({ data }) => {
        if (data) {
          setInfoToolTip({ image: successImage, caption: textContents.infoTooltip.messages.success, isOpen: true });
        } else {
          setInfoToolTip({ image: failImage, caption: textContents.infoTooltip.messages.fail, isOpen: true });
        }
      })
      .then(() => history.push("/sign-in"))
      .catch((e) => {
        console.error(e);
      });
  }

  function handleLogin(email, password) {
    authorize(email, password)
      .then(({ token }) => {
        if (token) {
          setLoggedIn(true);
        }
      })
      .then(() => history.push("/"))
      .catch((e) => {
        console.error(e);
      });
  }

  function handleLogout() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    setEmail("");
  }

  function handleCheckToken() {
    if (localStorage.getItem("jwt")) {
      const token = localStorage.getItem("jwt");
      checkToken(token)
        .then(({ data }) => {
          if (data.email) {
            setLoggedIn(true);
            setEmail(data.email);
          }
        })
        .then(history.push("/"))
        .catch((e) => {
          history.push("/sign-in");
          console.error(e);
        });
    }
  }

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  React.useEffect(() => {
    handleCheckToken();
  }, []);

  return (
    <div className={classNames("page", { page_state_unsigned: !loggedIn })}>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__content">
          <Header onLogout={handleLogout} />
          <Switch>
            <ProtectedRoute
              exact
              path="/"
              component={Main}
              loggedIn={loggedIn}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              selectedCard={selectedCard}
              onCardClick={(imageLink) => handleCardClick(imageLink)}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
            <Route path="/sign-up">
              <Register onRegister={handleRegister} />
            </Route>
            <Route path="/sign-in">
              <Login onLogin={handleLogin} />
            </Route>
            <Route exact path="/">
              {!loggedIn && <Redirect to="/sign-in" />}
            </Route>
          </Switch>
          {loggedIn && <Footer />}
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            content={textContents.editAvatar}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            content={textContents.editProfile}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlace}
            content={textContents.addPlace}
          />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          <InfoTooltip
            image={infoTooltip.image}
            caption={infoTooltip.caption}
            isOpen={infoTooltip.isOpen}
            onClose={closeAllPopups}
          />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default withRouter(App);
