import api from '../configs/api.js';
import axios from 'axios';


async function getAllUserEmails() {
    try {
        const response = await api.get('/users'); 
        if (response.data && response.data.data) {
            const emails = response.data.data.map(user => user.attributes.email);  
            console.log('Danh sách email người dùng:', emails);
        } else {
            console.log('Không có người dùng hoặc không có email');
        }
    } catch (error) {
        console.error('Lỗi khi lấy thông tin người dùng:', error);
    }
  }

  
  
// getAllUserEmails(); 

async function getUserAccountInfo(userApiKey) {
    try {
        const response = await axios.get('http://dashboard.shinelord.net/api/client/account', {
            headers: {
                'Authorization': `Bearer ${userApiKey}`,
                'Accept': 'application/json',
            },
        });

        const userData = response.data;
        console.log('Thông tin tài khoản người dùng:', userData);
        return userData;
    } catch (error) {
        console.error('Lỗi khi lấy thông tin tài khoản:', error);
        throw new Error('Không thể lấy thông tin tài khoản. Vui lòng kiểm tra API Key.');
    }
}

// Ví dụ sử dụng
const userApiKey = 'ptlc_VTX2lX29QRLdM25b6MqFVWPwo1Xx0EBXFHb8Tv7qnaa';
getUserAccountInfo(userApiKey)
    .then(userData => {
        console.log('Email người dùng:', userData.attributes.email);
    })
    .catch(error => {
        console.error(error.message);
    });


export default {
    getAllUserEmails
};