import React from "react";
import { textContents } from "../utils/constants";
import AuthForm from "./AuthForm";
import PropTypes from "prop-types";

export default function Login({ onLogin }) {
  Login.propTypes = {
    onLogin: PropTypes.func,
  };

  const content = textContents.auth;
  const [formValues, setFormValues] = React.useState({});

  function handleInputChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onLogin(formValues);
  }

  return (
    <AuthForm
      name="login"
      title={content.titleLogin}
      submitButtonLabel={content.submitLoginLabel}
      formFooterLink=""
      onSubmit={handleSubmit}
    >
      <label className="form__input-container">
        <input
          id="login-email"
          name="email"
          type="email"
          placeholder={content.emailPlaceholder}
          required
          autoFocus
          className="form__input form__input_type_auth"
          value={formValues.email || ""}
          onChange={handleInputChange}
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
          value={formValues.password || ""}
          onChange={handleInputChange}
        />
      </label>
    </AuthForm>
  );
}
