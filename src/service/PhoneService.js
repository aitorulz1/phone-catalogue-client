import axios from 'axios';

const http = axios.create({
    baseURL: process.env.BASE_URL || 'http://localhost:4000'
})

const phones = () => http.get('phones')

export default {
    phones
}