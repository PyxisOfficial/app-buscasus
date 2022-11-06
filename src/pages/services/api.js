import axios from 'axios'

const api = axios.create({

    baseURL:   'http://192.168.15.45/buscaSusWeb-main/buscaSusWeb-main/api/'

});

export default api;