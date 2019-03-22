import axios from 'axios';

const KEY = 'AIzaSyBhJhXaKLlBQd6qDUPpt-QMv-zhn_9j7Jw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});