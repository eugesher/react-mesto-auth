import React from "react";
import { textContents } from "../utils/constants";
import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import PropTypes from "prop-types";

export default function Register({ onRegister }) {
  Register.propTypes = {
    onRegister: PropTypes.func,
  };

  const [formValues, setFormValues] = React.useState({});

  const content = textContents.auth;
  const formFooterLink = (
    <Link to="/sign-in" className="form__footer-link">
      {content.alreadyRegisteredLink}
    </Link>
  );

  function handleInputChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onRegister(formValues);
  }

  return (
    <AuthForm
      name="register"
      title={content.titleRegister}
      submitButtonLabel={content.submitRegisterLabel}
      formFooterLink={formFooterLink}
      onSubmit={handleSubmit}
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
          value={formValues.email || ""}
          onChange={handleInputChange}
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
          value={formValues.password || ""}
          onChange={handleInputChange}
        />
      </label>
    </AuthForm>
  );
}
