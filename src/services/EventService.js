import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/exanthakis/vue-mastery-course',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

const getEvents = (perPage, page) => {
  return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
}

const getEvent = (id) => {
  return apiClient.get(`/events/${id}`)
}

export default { getEvents, getEvent }
