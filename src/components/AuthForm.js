import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

export default function AuthForm({ children, name, title, submitButtonLabel, formFooterLink, onSubmit }) {
  AuthForm.propTypes = {
    children: PropTypes.node,
    formFooterLink: PropTypes.node,
    name: PropTypes.string,
    title: PropTypes.string,
    submitButtonLabel: PropTypes.string,
    onSubmit: PropTypes.func,
  };

  return (
    <form name={name} noValidate className="form form_type_auth" onSubmit={onSubmit}>
      <div>
        <h2 className="form__title form__title_type_auth">{title}</h2>
        {children}
      </div>
      <div>
        <button type="submit" className="form__submit-button form__submit-button_type_auth">
          {submitButtonLabel}
        </button>
        <div className="form__footer">
          <Route path="/sign-up">{formFooterLink}</Route>
        </div>
      </div>
    </form>
  );
}
