import { all, takeLatest } from 'redux-saga/effects'
import { ACTIONS } from '../constants'

import { fetchPhotos } from '../containers/ListPhotoContainer/sagas'
import { login } from '../containers/LoginFormContainer/sagas'

export default function* rootSaga() {
  yield all([
    takeLatest(ACTIONS.GET_PHOTOS, fetchPhotos),
    takeLatest(ACTIONS.LOGIN_REQUEST, login),
  ]);
}