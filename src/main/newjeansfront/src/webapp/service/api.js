import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api';

// 키워드로 기사 검색
export const searchArticles = async (keyword) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/keywordsearch`, {
            params: { keyword }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

// 출판사별 기사 가져오기
export const getArticlesByPublisher = async (publisher) => {
    try {
        const data = { publisher: publisher }; // JSON 객체로 변환
        const response = await axios.post(
            'http://localhost:8081/api/publisher',
            data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Error fetching articles by publisher:', {
                data: error.response.data,
                status: error.response.status,
                headers: error.response.headers
            });
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Error setting up the request:', error.message);
        }
        throw error;
    }
};

// 구독한 뉴스 가져오기
export const getUserSubscribedNews = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user-subscribed-news/${userId}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            // 요청이 이루어졌고, 서버가 2xx 외의 상태 코드를 응답한 경우
            console.error('Error fetching subscriptions:', {
                data: error.response.data,
                status: error.response.status,
                headers: error.response.headers
            });
        } else if (error.request) {
            // 요청이 이루어졌으나 응답을 받지 못한 경우
            console.error('No response received:', error.request);
        } else {
            // 오류를 발생시킨 요청 설정 중 문제가 발생한 경우
            console.error('Error setting up the request:', error.message);
        }
        throw error;
    }
};
