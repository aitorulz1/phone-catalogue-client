
import axios from 'axios';

const phoneService = axios.create({
    baseURL: process.env.BASE_URL || 4000
})

export default phoneService
