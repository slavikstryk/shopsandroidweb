import axios from 'axios'

export default axios.create({
    baseURL="http://localhost:5123/api/Products/all"
})