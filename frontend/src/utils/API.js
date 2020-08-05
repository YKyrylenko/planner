import axios from "axios";

let token = JSON.parse(localStorage.getItem("token"));

axios.defaults.headers.common["Authorization"] = `JWT ${token}`;

export default axios;
