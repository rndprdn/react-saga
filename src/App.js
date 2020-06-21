import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import styled from 'styled-components'
import { ROUTES, IMAGES } from './configs'
import { Switch, withRouter } from 'react-router-dom'
import pages from './pages'
import AuthRoute from './components/AuthRoute'
import UnauthRoute from './components/UnauthRoute'

const Container = styled.div`
  width: 768px;
  margin: 0 auto;
  padding-top: 50px;
`

const Logout = styled.img`
  position: absolute;
  top: -12px;
  right: 20px;
  width: 80px;
  cursor: pointer;
`

export const App = ({ history }) => {
  const isAuthenticated = window.localStorage.getItem('token');
  const handleLogout = () => {
    localStorage.setItem('token', '');
    setTimeout(() => {
      history.push(ROUTES.HOME())
    }, 2000);
  }

  return (
    <Container>
      <CssBaseline />
      {isAuthenticated && <Logout src={IMAGES.LOGOUT} alt='Logout' onClick={handleLogout} />}
      <Switch>
        <AuthRoute
          exact
          path={ROUTES.GALLERY()}
          component={pages.Gallery}
          redirectTo={ROUTES.HOME()}
        />
        <UnauthRoute
          exact
          path={ROUTES.HOME()}
          component={pages.Login}
          redirectTo={ROUTES.GALLERY()}
        />
      </Switch>
    </Container>
  );
}

export default withRouter(App)