import axios from "axios";

export default () => {
    return axios.create({
        baseURL: "/",
        headers: {
            // 'Authorization': 'Bearer Token' + store.state.token,
            'Content-Type': 'multipart/form-data'
        }
    })
}
