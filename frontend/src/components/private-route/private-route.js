import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component, redirectTo, ...rest }) => {
  const isLogged = useSelector((state) => state.authReducer.loginSuccess);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? (
          React.createElement(component, { ...props })
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType,
  redirectTo: PropTypes.string,
};
export default PrivateRoute;
