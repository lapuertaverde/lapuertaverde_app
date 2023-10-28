import axios from 'axios'

export const get = (route, token) =>
  axios
    .get(`http://localhost:8080/api/v1/${route}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then((res) => res.data.info.data)
    .catch((error) => error)

export const post = (route, values) => {
  const response = axios.post(`http://localhost:8080/api/v1/${route}`, values)
  return response
}
