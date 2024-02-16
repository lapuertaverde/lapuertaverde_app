import axios from 'axios'
import { toast } from 'react-toastify'

const getToken = () => {
  const { token } = JSON.parse(sessionStorage.getItem('token'))
  return token
}

export const get = (route) =>
  axios
    .get(`http://localhost:8080/api/v1/${route}`, {
      headers: {
        authorization: `Bearer ${getToken()}`
      }
    })
    .then((res) => res.data.info.data)
    .catch((error) => console.log(error))

export const post = async (route, values) => {
  const id = toast.loading('Please wait...')
  return axios
    .post(`http://localhost:8080/api/v1/${route}`, values, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${route?.includes('login') ? '' : getToken()}`
      }
    })
    .then((res) => {
      toast.update(id, {
        render: res.data.info.message,
        type: 'success',
        isLoading: false,
        autoClose: 1500
      })

      return res
    })
    .catch((error) => {
      console.log(error)
      toast.update(id, {
        render: error.response?.data?.info?.message,
        type: 'error',
        isLoading: false,
        autoClose: 1500
      })

      return error
    })
}

export const patch = (route, values) =>
  axios
    .patch(`http://localhost:8080/api/v1/${route}`, values, {
      headers: { 'Content-Type': 'application/json', authorization: `Bearer ${getToken()}` }
    })
    .then((res) => res)
    .catch((error) => console.log(error))

export const deleteService = (route) =>
  axios
    .delete(`http://localhost:8080/api/v1/${route}`, {
      headers: { 'Content-Type': 'application/json', authorization: `Bearer ${getToken()}` }
    })
    .then((res) => res)
    .catch((error) => console.log(error))
