import React from "react";
import { textContents } from "../utils/constants";
import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";

export default function Register() {
  const formFooterLink = (
    <Link to="/sign-in" className="form__footer-link">
      {textContents.auth.alreadyRegisteredLink}
    </Link>
  );
  const content = textContents.auth;

  return (
    <AuthForm
      name="register"
      title={content.titleRegister}
      submitButtonLabel={content.submitRegisterLabel}
      formFooterLink={formFooterLink}
    >
      <label className="form__input-container">
        <input
          id="register-email"
          name="email"
          type="email"
          placeholder={content.emailPlaceholder}
          required
          autoFocus
          className="form__input form__input_type_auth"
        />
      </label>
      <label className="auth__input-container">
        <input
          id="register-password"
          name="password"
          type="password"
          placeholder={content.passwordPlaceholder}
          required
          className="form__input form__input_type_auth"
        />
      </label>
    </AuthForm>
  );
}
