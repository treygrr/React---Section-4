import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 14c55d32586a4adbc8a380e633ebb072339a8eb0c9daa7d076b231cc12d28f31'
    }
});