
import axios from 'axios';

const myAxios = axios.create({
    baseURL: 'http://127.0.0.1:30001'
});

export default myAxios;