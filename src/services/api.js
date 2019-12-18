import axios from 'axios';

const api = axios.create({
  baseURL: "https://universo-backend.herokuapp.com/universo",
});

api.postOrPut = (url, id, data, config = {}) => {
    const method = id ? "put" : "post";
    const apiUrl = id ? `${url}/id/${id}` : url;
  
    return api[method](apiUrl, data, config);
  };

export default api;