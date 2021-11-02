import axios from "axios";

const api = axios.create({
    baseURL: "http://hp-api.herokuapp.com/api/characters"
});

export default api;