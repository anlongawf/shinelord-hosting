import express from 'express';
import configViewEngine from './src/configs/viewEngine.js';
import { testConnection } from "./src/configs/api.js";
import router from './src/routers/web.js';
import userController from './src/controllers/userController.js';
import session from 'express-session'; 
import bcrypt from 'bcryptjs';

const app = express()
const port = 3000


// config view Engine
configViewEngine(app)

// Config Middleware
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: '153443',
  resave: false,
  saveUninitialized: true
}));

// Config Routers
app.use('', router);

// Test connect API
testConnection();



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})