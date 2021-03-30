import axios, { AxiosResponse } from 'axios'
import { getHost } from './getHost'

export interface AuthData {
  auth: boolean
}

export const authRequest = (
  password: string
): Promise<AxiosResponse<AuthData>> =>
  axios.get(`${getHost()}/api/user?msg=${password}`).catch((err) => {
    if (err.response) {
      return err.response
    }
  })
