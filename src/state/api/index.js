/* eslint-disable no-debugger */
import axios from 'axios'

export default (history = null) => {
  const baseURL = process.env.REACT_APP_BACKEND_URL

  const headers = {
    'Content-Type': 'application/json;charset=utf-8',
  }

  const axiosInstance = axios.create({
    withCredentials: true,
    headers,
  })

  axiosInstance.interceptors.response.use(
    async (response) =>
      new Promise((resolve, reject) => {
        debugger
        resolve(response)
      }),
    async (error) => {
      debugger
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error)
        })
      }
      if (error.response.status === 401) {
        if (history) {
          history.push('/')
        } else {
          window.location = '/'
        }
      } else {
        return new Promise((resolve, reject) => {
          reject(error)
        })
      }
    }
  )

  return axiosInstance
}
