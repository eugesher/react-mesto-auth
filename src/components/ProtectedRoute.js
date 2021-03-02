import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ component: Component, loggedIn, ...props }) => {
  ProtectedRoute.propTypes = {
    component: PropTypes.elementType,
    loggedIn: PropTypes.bool,
  };

  return <Route>{loggedIn ? <Component {...props} /> : <Redirect to="/sign-in" />}</Route>;
};

export default ProtectedRoute;
