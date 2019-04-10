import qs from 'qs'
import axios from '../assets/js/axios'
import { module } from './module'

export const interface = (params) => {
  return axios.get(module.interfaceUrl, qs.stringify(params))
}

