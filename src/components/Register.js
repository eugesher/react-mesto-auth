import React from "react";

export default function Register() {
  return (
    <div className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <label className="auth__input-container">
        <input id="register-email" name="email" type="email" required className="auth__input" />
      </label>
      <label className="auth__input-container">
        <input id="register-password" name="password" type="password" required className="auth__input" />
      </label>
      <button type="submit" className="register__link">
        Зарегистрироваться
      </button>
    </div>
  );
}
