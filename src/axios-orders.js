import axios from 'axios'

const Instance = axios.create({
  baseURL: 'https://react-burger-builder-7468b.firebaseio.com/'
})

export default Instance
