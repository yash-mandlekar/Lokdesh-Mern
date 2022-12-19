import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        'Content-Type': 'application/json',
    },
});


export default Axios;
