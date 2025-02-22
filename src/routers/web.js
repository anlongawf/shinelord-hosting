// src/routers/web.js
import express from 'express';
import { login } from '../controllers/authController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Trang chủ');
});

router.post('/login', login);

router.get('/login', (req, res) => {
  res.render('login');
});


router.get('/acount', (req, res) => {
  res.render('account');
});



export default router;
