import axios from "axios";

const token = localStorage.getItem("token" || "");
const baseURL =  "https://task-manager.codionslab.com/api";

const API = axios.create({
    baseURL,
    headers : {
        Authorization: `Bearer ${token}`,
        "content-type" : "application/json"
    }
})
export default API;
