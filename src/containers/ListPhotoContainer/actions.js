import { ACTIONS } from '../../constants';

export function getPhotos(term) {
  return {
    type: ACTIONS.GET_PHOTOS,
    term
  }
};