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

export const post = async (route, values) => {
  try {
    const response = await axios.post(`http://localhost:8080/api/v1/${route}`, values)
    return response
  } catch (error) {
    console.log(error)
  }
}

export const patch = async (route, values) => {
  const token = sessionStorage.getItem('token')
  if (token) {
    const response = await axios.patch(`http://localhost:8080/api/v1/${route}`, values, {
      headers: { 'Content-Type': 'application/json', authorization: `Bearer ${token}` }
    })
    return response
  } else {
    return 'No Authorizated'
  }
}
