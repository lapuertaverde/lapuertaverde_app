import axios from 'axios'

const getToken = () => sessionStorage.getItem('token')

export const get = (route) => {
  return axios
    .get(`http://localhost:8080/api/v1/${route}`, {
      headers: {
        authorization: `Bearer ${getToken()}`
      }
    })
    .then((res) => res.data.info.data)
    .catch((error) => console.log(error))
}

export const post = async (route, values) => {
  try {
    const response = await axios.post(`http://localhost:8080/api/v1/${route}`, values, {
      headers: { 'Content-Type': 'application/json', authorization: `Bearer ${getToken()}` }
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

export const patch = async (route, values) => {
  const response = await axios.patch(`http://localhost:8080/api/v1/${route}`, values, {
    headers: { 'Content-Type': 'application/json', authorization: `Bearer ${getToken()}` }
  })
  return response
}

export const deleteService = async (route) => {
  axios
    .delete(`http://localhost:8080/api/v1/${route}`, {
      headers: { 'Content-Type': 'application/json', authorization: `Bearer ${getToken()}` }
    })
    .then((res) => res)
    .catch((error) => console.log(error))
}
