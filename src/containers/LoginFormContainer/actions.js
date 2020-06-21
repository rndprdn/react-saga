import { ACTIONS } from '../../constants';

export function login(data) {
  return {
    type: ACTIONS.LOGIN_REQUEST,
    data
  }
};