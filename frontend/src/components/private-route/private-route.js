import React from "react";
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
export default PrivateRoute;
