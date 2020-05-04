import axios from "axios";

const BASE_URL = 'https://social-network.samuraijs.com/';

const instance = axios.create({
    withCredentials: true,
    baseURL: BASE_URL,
    headers: {
        "API-KEY": 'a40e873c-c776-4809-b8b4-dedf442550b3'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },

    followUser(userId) {
        return instance.post(`api/1.0/follow/${userId}`);
    },
    unFollowUser(userId) {
        return instance.delete(`api/1.0/follow/${userId}`);
    },
    getProfile(userId) {
        return instance.get(`api/1.0/profile/` + userId);
    }
};

export const authApi = {
    me() {
        return instance.get(`api/1.0/auth/me`);
    }
}