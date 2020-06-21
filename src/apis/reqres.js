import axios from 'axios'
import { SERVICES } from '../configs'

export default function reqres(data) {
  return axios({
    url: `${SERVICES.LOGIN}`,
    data,
    method: 'POST'
  })
}