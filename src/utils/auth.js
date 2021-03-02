export const BASE_URL = "https://auth.nomoreparties.co";

export function register(email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email, password),
  }).then((response) => response.json());
}

export function authorize(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email, password),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
      // if (data.user) {
      //   localStorage.setItem("jwt", data.jwt);
      //   return data;
      // }
    });
}

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((e) => {
      console.error(e);
    });
};
