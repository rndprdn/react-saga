import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from '../sagas'

function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    sagaMiddleware,
    logger
  ]

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;