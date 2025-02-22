// src/routers/web.js
import express from 'express';


const router = express.Router();

router.get('/', (req, res) => {
  res.send('Trang chủ');
});

router.get('/login', (req, res) => {
  res.render('login');
});


export default router;
