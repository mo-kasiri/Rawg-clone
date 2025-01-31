import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1477580a58364239a7595f46763b8103'
    }
})