import React from "react";
import { popupContents } from "../utils/constants";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="form form_type_auth">
      <div>
        <h2 className="form__title form__title_type_auth">{popupContents.auth.titleRegister}</h2>
        <label className="form__input-container">
          <input
            id="register-email"
            name="email"
            type="email"
            placeholder={popupContents.auth.emailPlaceholder}
            required
            className="form__input form__input_type_auth"
          />
        </label>
        <label className="auth__input-container">
          <input
            id="register-password"
            name="password"
            type="password"
            placeholder={popupContents.auth.passwordPlaceholder}
            required
            className="form__input form__input_type_auth"
          />
        </label>
      </div>
      <div>
        <button type="submit" className="form__submit-button form__submit-button_type_auth">
          {popupContents.auth.submitLabel}
        </button>
        <div className="form__opt-link-container">
          <Link className="form__opt-link">{popupContents.auth.alreadyRegisteredLink}</Link>
        </div>
      </div>
    </div>
  );
}
