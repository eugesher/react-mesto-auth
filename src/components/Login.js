import React from "react";
import { textContents } from "../utils/constants";

export default function Login() {
  return (
    <div className="form form_type_auth">
      <div>
        <h2 className="form__title form__title_type_auth">{textContents.auth.titleLogin}</h2>
        <label className="form__input-container">
          <input
            id="login-email"
            name="email"
            type="email"
            placeholder={textContents.auth.emailPlaceholder}
            required
            className="form__input form__input_type_auth"
          />
        </label>
        <label className="auth__input-container">
          <input
            id="login-password"
            name="password"
            type="password"
            placeholder={textContents.auth.passwordPlaceholder}
            required
            className="form__input form__input_type_auth"
          />
        </label>
      </div>
      <div>
        <button type="submit" className="form__submit-button form__submit-button_type_auth">
          {textContents.auth.submitLoginLabel}
        </button>
        <div className="form__opt-link-container" />
      </div>
    </div>
  );
}
// todo: create auth component, add mobile design
