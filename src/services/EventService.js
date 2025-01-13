import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/exanthakis/vue-mastery-course',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

const getEvents = () => {
  return apiClient.get('/events')
}

export default { getEvents }
