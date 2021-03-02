import headerLogo from "../images/logo.svg";
import { Switch, Route, Link } from "react-router-dom";
import { textContents } from "../utils/constants";
import PropTypes from "prop-types";

export default function Header({ onLogout }) {
  Header.propTypes = {
    onLogout: PropTypes.func,
  };

  function logout(event) {
    event.preventDefault();
    onLogout();
  }

  return (
    <header className="header">
      <img src={headerLogo} alt="Место" className="header__logo" />
      <Switch>
        <Route path="/sign-in">
          <Link to="/sign-up" className="header__link">
            {textContents.headerLink.register}
            {/*todo: refactor*/}
          </Link>
        </Route>
        <Route path="/sign-up">
          <Link to="/sign-in" className="header__link">
            {textContents.headerLink.login}
          </Link>
        </Route>
        <Route exact path="/">
          <Link to="/sign-in" onClick={logout} className="header__link">
            {textContents.headerLink.logout}
          </Link>
        </Route>
      </Switch>
    </header>
  );
}
