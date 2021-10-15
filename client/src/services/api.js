import axios from "axios";

export default () => {
    return axios.create({
        baseURL: `http://localhost:8000/`,
        headers: {
            // 'Authorization': 'Bearer Token' + store.state.token,
            'Content-Type': 'multipart/form-data'
        }
    })
}
