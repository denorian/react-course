import axios from "axios";

const BASE_URL = 'https://social-network.samuraijs.com/';

const instance = axios.create({
    withCredentials: true,
    baseURL: BASE_URL,
    headers: {
        "API-KEY": 'a40e873c-c776-4809-b8b4-dedf442550b3'
    }
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`api/1.0/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        });
};

export const followUser = (userId) => {
    return  instance.post(`api/1.0/follow/${userId}`)
        .then(response => {
            return response.data
        });
};

export const unFollowUser = (userId) => {
    return instance.delete(`api/1.0/follow/${userId}`)
        .then(response => {
            return response.data
        })
};