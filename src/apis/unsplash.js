import axios from 'axios'
import { SERVICES, INITIALIZERS } from '../configs'

export default function unsplash(term) {
  return axios({
    url: `${SERVICES.GET_PHOTOS}?client_id=${INITIALIZERS.CLIENT_ID}&query=${term}`,
    method: 'GET'
  })
}