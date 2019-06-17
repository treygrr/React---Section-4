import axios from 'axios';

const KEY = 'AIzaSyCbq5Ppo2m86ozXkXCgHlLeZot9S8yxO44';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});

