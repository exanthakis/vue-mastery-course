import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://openlibrary.org',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

const apiCoversClient = axios.create({
  baseURL: 'https://covers.openlibrary.org',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
// https://covers.openlibrary.org/b/id/13523564-L.jpg
// https://openlibrary.org/search.json?q=mathe&limit=10&page=2
// https://covers.openlibrary.org/b/$key/$value-$size.jpg

const getEvents = (perPage, page) => {
  return apiClient.get('/search.json?q=mathe&limit=' + perPage + '&page=' + page)
}

const getEvent = (id) => {
  return apiClient.get(`/events/${id}`)
}

const getCover = (id, size) => {
  return apiCoversClient.get('/b/id/' + id + '-' + size + '.jpg')
}

export default { getEvents, getEvent, getCover }
