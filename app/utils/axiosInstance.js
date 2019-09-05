import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://fast-foodfastapp.herokuapp.com/api/v1',
});

export default instance;