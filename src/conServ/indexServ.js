import axios from 'axios';

export const API_URL = `axios.post('https://whispering-falls-49383-3a4b7c43fb49.herokuapp.com/auth/`

const $api = axios.create({
    withCredentials:true,
    baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
    return config;
})

export default $api