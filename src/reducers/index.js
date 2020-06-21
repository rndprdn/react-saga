import { combineReducers } from 'redux'

import listPhoto from '../containers/ListPhotoContainer/reducer'
import login from '../containers/LoginFormContainer/reducer'

const rootReducer = combineReducers({
  listPhoto,
  login
});

export default rootReducer;