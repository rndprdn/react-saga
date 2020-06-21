import { call, put } from 'redux-saga/effects'
import unsplash from '../../apis/unsplash'

export function* fetchPhotos({ term }) {
  try {
    const response = yield call(unsplash, term)

    if (response.status === 200) {
      const { results } = response.data
      yield put({ type: "PHOTOS_RECEIVED", photos: results });
    }
  } catch (err) {
    console.log(err);
  }
}