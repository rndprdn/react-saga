import { ACTIONS } from '../../constants';

const initState = {
  loading: false
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.GET_PHOTOS:
      return { ...state, loading: true };
    case ACTIONS.PHOTOS_RECEIVED:
      return { ...state, photos: action.photos, loading: false }
    default:
      return state;
  }
};
export default reducer;