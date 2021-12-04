import axios from 'axios';

export default axios.create({
    baseURL: "local.laravel.pu911.com",
    headers: {
        "Content-type": "application/json"
    }
});