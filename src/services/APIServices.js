import axios from 'axios'

export const get = (route) => {
  const token = sessionStorage.getItem('token')
  if (token)
    return axios
      .get(`http://localhost:8080/api/v1/${route}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      .then((res) => res.data.info.data)
      .catch((error) => console.log(error))
  else {
    console.log('Not Authorizated')
    return []
  }
}

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
    return console.log('No Authorizated')
  }
}

export const deleteService = async (route) => {
  const response = await axios
    .delete(`http://localhost:8080/api/v1/${route}`)
    .then((res) => console.log(res))
    .catch((error) => console.log(error))
}
