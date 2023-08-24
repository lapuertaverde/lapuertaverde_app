import axios from 'axios'

export const get = (route) =>
  axios
    .get(`http://localhost:8080/api/v1/${route}`)
    .then((res) => res.data.info.data)
    .catch((error) => error)
