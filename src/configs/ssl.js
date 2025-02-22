import fs from "fs";
import path from "path";

const sslDir = path.resolve("ssl");

const sslOptions = {
    key: fs.readFileSync(`${sslDir}/dashboard.shinelord.net.key`, "utf8"),  
    cert: fs.readFileSync(`${sslDir}/dashboard.shinelord.net.pem`, "utf8")  
};

export default sslOptions;
