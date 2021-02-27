import React from "react";
import { popupContents } from "../utils/constants";

export default function Register() {
  return (
    <div className="form form_type_auth">
      <div>
        <h2 className="form__title form__title_type_auth">{popupContents.auth.titleRegister}</h2>
        <label className="form__input-container">
          <input id="register-email" name="email" type="email" required className="form__input form__input_type_auth" />
        </label>
        <label className="auth__input-container">
          <input
            id="register-password"
            name="password"
            type="password"
            required
            className="form__input form__input_type_auth"
          />
        </label>
      </div>
      <div>
        <button type="submit" className="form__submit-button form__submit-button_type_auth">
          {popupContents.auth.submitLabel}
        </button>
      </div>
    </div>
  );
}
