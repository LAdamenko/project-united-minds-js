import axios from "axios";

export function apiGet(){
    const base_url = "https://portfolio-js.b.goit.study";
    const end_point = "/api/requests";
    const url = `${base_url}${end_point}`;

    return axios.get(url)
        .then(response => response.data)
        .catch(error => {
            console.error(error);
            throw error;
        });
}

export function apiPost(data){
    const base_url = "https://portfolio-js.b.goit.study";
    const end_point = "/api/requests";
    const url = `${base_url}${end_point}`;

    return axios.post(url, data)
        .then(response => response.data)
        .catch(error => {
            console.error(error);
            throw error;
        });
}
