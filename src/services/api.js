import axios from "axios";

const api = axios.create({
    baseURL: "https://hp-api.herokuapp.com/api/characters"
});

export default api;