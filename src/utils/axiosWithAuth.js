import axios from 'axios';

//Task List:
//1. Complete axiosWithAuth

const axiosWithAuth = ()=> {
    const token = localStorage.getItem('token')
    return axios.create({
        headers: {
            Authorization: token,
        },
        baseURL:'http://localhost:9000'
    })
}

export default axiosWithAuth;
