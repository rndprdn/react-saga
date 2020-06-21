import { call, put } from 'redux-saga/effects'
import reqres from '../../apis/reqres'
import history from '../../history'
import { ROUTES } from '../../configs'


export function* login({ data }) {
  try {
    const response = yield call(reqres, data)

    if (response.status === 200) {
      yield put({ type: "LOGIN_SUCCESS", token: response.token });
      yield window.localStorage.setItem('token', response.token)
      history.push(ROUTES.GALLERY())
    }
  } catch (err) {
    console.log(err);
  }
}