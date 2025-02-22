import axios from "axios";
import https from "https";
import dotenv from "dotenv";
import sslOptions from "./ssl.js"; 

dotenv.config();

const PANEL_URL = process.env.PANEL_URL;
const API_KEY = process.env.API_KEY;

const api = axios.create({
    baseURL: `${PANEL_URL}/api/application`,
    headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    httpsAgent: new https.Agent({
        ...sslOptions,  
        rejectUnauthorized: true 
    })
});

export async function testConnection() {
    try {
        const response = await api.get("/servers");
        console.log("API successfully connected");
        console.log(response.data);
    } catch (error) {
        console.error("API not connected:", error.response ? error.response.data : error.message);
    }
}

export default api;
