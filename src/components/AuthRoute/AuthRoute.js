import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AuthRoute = ({ component: Component, redirectTo, ...rest }) => {
  const isAuthenticated = window.localStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={props => {
        const toObject = {
          pathname: redirectTo,
          state: { from: props.location }
        };

        return isAuthenticated ? <Component {...props} /> : <Redirect to={toObject} />
      }}
    />
  )
}

export default AuthRoute
