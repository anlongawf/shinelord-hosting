import { error } from 'console';
import api from '../configs/api.js';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'f8aefejefjjH21393HKAJjkjJK8';

export const login = async (req, res) => {
    const { email, apiKey } = req.body ;

    if (!email || !apiKey) {
        return res.status(400).json({ error: 'Vui lòng nhập đầy đủ Email và API Key!'});
    }

    try {
        const response = await axios.get('http://dashboard.shinelord.net/api/client/account', {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Accept': 'application/json',
            }
        });

        const userData = response.data;

        if(userData.attributes.email === email) {
            const token = jwt.sign({ email: email }, SECRET_KEY, { expiresIn: '1h' });
            return res.json({
                success: true,
                message: 'Đăng nhập thành công',
                token: token,
                redirectUrl: '/dashboard'
            });
        } else {
            res.status(401).json({ success: false, message: 'Email hoặc API Key không hợp lệ.' });
        }

    } catch (error) {
        console.error('Lỗi khi xác thực:', error);
        res.status(500).json({ success: false, message: 'Đã xảy ra lỗi khi xác thực.' });
    }
}