import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import configureStore from './store/configureStore'
import history from './history'

const store = configureStore()

export default function Root() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  )
}
