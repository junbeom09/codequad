import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logoutUser = async () => {
            try {
                await axios.post('http://localhost:8081/api/userLogout');
                sessionStorage.removeItem("userInfo");
                setTimeout(() => {
                    navigate("/");
                    window.location.reload();  // 페이지 새로고침
                }, 500); // 1초 후 페이지 새로고침
            } catch (error) {
                console.error("Logout failed:", error.response ? error.response.data : error.message);
            }
        };
        logoutUser();
    }, [navigate]);

    return <div>Logging out...</div>;
};

export default Logout;
