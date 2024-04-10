import axios from "axios";

export function apiGet(){
    const base_url = "https://portfolio-js.b.goit.study";
    const end_point = "/api/reviews";
    const url = `${base_url}${end_point}`;

    return axios.get(url)
        .then(response => response.data)
        .catch(error => {
            console.error(error);
            throw error;
        });
}
