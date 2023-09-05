import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000";

export const getAllTimeCapsules = () => {
    return axios.get(`${BASE_URL}/capsules`);
};

export const addTimeCapsule = (message) => {
    return axios.post(`${BASE_URL}/capsule`, { message });
};
