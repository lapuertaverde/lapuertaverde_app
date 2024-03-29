import axios from 'axios'

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

export const post = async (route, values) => {
  return axios
    .post(`http://localhost:8080/api/v1/${route}`, values, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${route?.includes('login') ? '' : getToken()}`
      }
    })
    .then((res) => res)
}

export const patch = (route, values) =>
  axios
    .patch(`http://localhost:8080/api/v1/${route}`, values, {
      headers: { 'Content-Type': 'application/json', authorization: `Bearer ${getToken()}` }
    })
    .then((res) => res && res)

export const deleteService = (route) =>
  axios
    .delete(`http://localhost:8080/api/v1/${route}`, {
      headers: { 'Content-Type': 'application/json', authorization: `Bearer ${getToken()}` }
    })
    .then((res) => res)
