import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://zoo-animal-api.herokuapp.com/',
});

export default apiClient;