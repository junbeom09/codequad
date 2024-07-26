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

// 카테고리별 기사 가져오기
export const getArticlesByCategory = async (categoryId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/category/${categoryId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// 언론사별 기사 가져오기
export const getArticlesByPublisher = async (publisher) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/publisher/${publisher}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// 카테고리 내 키워드 검색
export const searchArticles = async (keyword) => {
    try {
        const response = await axios.get(`http://localhost:8081/api/keywordsearch`, {
            params: { keyword }
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};


export const getUserSubscribedNews = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:8081/api/user-subscribed-news/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching subscribed news:', error);
        throw error;
    }
};

export const subscribeToNewsAgency = async (userId, agencyId) => {
    try {
        console.log("Subscribing with userId:", userId, "and agencyId:", agencyId);  // 추가된 로그
        const response = await axios.post(`http://localhost:8081/api/subscribe`, {
            user_id: userId,
            uc_publisher: agencyId
        });
        return response.data;
    } catch (error) {
        console.error('Error subscribing:', error);
        throw error;
    }
};

export const unsubscribeFromNewsAgency = async (userId, agencyId) => {
    try {
        console.log("Unsubscribing with userId:", userId, "and agencyId:", agencyId);  // 추가된 로그
        const response = await axios.post(`http://localhost:8081/api/unsubscribe`, {
            user_id: userId,
            uc_publisher: agencyId
        });
        return response.data;
    } catch (error) {
        console.error('Error unsubscribing:', error);
        throw error;
    }
};