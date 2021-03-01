import headerLogo from "../images/logo.svg";
import { Switch, Route, Link } from "react-router-dom";
import { textContents } from "../utils/constants";

export default function Header() {
  return (
    <header className="header">
      <img src={headerLogo} alt="Место" className="header__logo" />
      <Switch>
        <Route path="/sign-in">
          <Link to="/sign-up" className="header__link">
            {textContents.headerLink.register}
          </Link>
        </Route>
        <Route path="/sign-up">
          <Link to="/sign-in" className="header__link">
            {textContents.headerLink.login}
          </Link>
        </Route>
        <Route exact path="/">
          <Link to="/sign-in" className="header__link">
            {textContents.headerLink.logout}
          </Link>
        </Route>
      </Switch>
    </header>
  );
}
