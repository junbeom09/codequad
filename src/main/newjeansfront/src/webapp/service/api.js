import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api';

// 회원가입
export const userAdd = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/userAdd`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// 데이터 전송 (endpoint)
export const sendData = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/endpoint`, data);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// 회원정보 수정
export const userUpdate = async (userId, userData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/userUpdate/${userId}`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// 로그인
export const userLogin = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/userLogin`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// 로그아웃
export const userLogout = async () => {
    try {
        const response = await axios.post(`${API_BASE_URL}/userLogout`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};