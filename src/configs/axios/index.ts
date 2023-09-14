/* eslint-disable no-console */
import axios from 'axios'

export function createService(baseURL: string) {
  const instance = axios.create({ baseURL })
  instance.interceptors.response.use(
    (e) => e.data.data,
    (err) => console.error(err),
  )
  return instance
}
