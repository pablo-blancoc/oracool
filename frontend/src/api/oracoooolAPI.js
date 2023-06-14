import axios from 'axios';

const oracoooolAPI = axios.create({
    baseURL: "http://localhost:5001",
    timeout: 10000,
  //   headers: {
  //     'Content-Type': 'application/json',
  //     session: localStorage.getItem('session'),
  //   },
  });
  
  export default oracoooolAPI;