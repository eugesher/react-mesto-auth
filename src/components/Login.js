import React from "react";
import { textContents } from "../utils/constants";
import AuthForm from "./AuthForm";

export default function Login() {
  const content = textContents.auth;

  return (
    <AuthForm name="login" title={content.titleLogin} submitButtonLabel={content.submitLoginLabel} formFooterLink="">
      <label className="form__input-container">
        <input
          id="login-email"
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
          id="login-password"
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
