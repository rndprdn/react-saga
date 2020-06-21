import { ACTIONS } from '../../constants';

const initState = {
  loading: false
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_REQUEST:
      return { ...state, loading: true };
    case ACTIONS.LOGIN_SUCCESS:
      return { ...state, token: action.token, loading: false }
    default:
      return state;
  }
};
export default reducer;