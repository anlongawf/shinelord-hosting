import express from 'express';
import configViewEngine from './src/configs/viewEngine.js';
import { testConnection } from "./src/configs/api.js";
import router from './src/routers/web.js';


const app = express()
const port = 3000


// config view Engine
configViewEngine(app)

// Config Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Config Routers
app.use('', router);

// Test connect API
testConnection();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})