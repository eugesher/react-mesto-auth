class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getData(response) {
    if (response.ok) return response.json();
    else return Promise.reject(`Ошибка: ${response.status}`);
  }

  _setHeaders() {
    this._headers.authorization = `Bearer ${localStorage.getItem("jwt")}`;
  }

  getUserInfo() {
    this._setHeaders();
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._getData);
  }

  getInitialCards() {
    this._setHeaders();
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._getData);
  }

  patchUserInfo({ name, about }) {
    this._setHeaders();
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name: name, about: about }),
    }).then(this._getData);
  }

  postCard({ name, link }) {
    this._setHeaders();
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name: name, link: link }),
    }).then(this._getData);
  }

  deleteCard(cardId) {
    this._setHeaders();
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._getData);
  }

  putCardLike(cardId) {
    this._setHeaders();
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._getData);
  }

  deleteCardLike(cardId) {
    this._setHeaders();
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._getData);
  }

  patchUserAvatar({ avatar }) {
    this._setHeaders();
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: avatar }),
    }).then(this._getData);
  }
}

const api = new Api({
  baseUrl: "https://api.mesto.eugesher.site",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
