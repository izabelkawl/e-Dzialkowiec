import path from "path";
import fs from "fs";
import morgan from "morgan";
import keys from "../config/keys.js";

const __dirname = path.resolve();
const mode = keys.loggerMode;
const outputPath = path.join(__dirname, "logs", "server_http.log");
const outputStream = fs.createWriteStream(outputPath, { flags: "a" });

export default morgan(mode, { stream: outputStream });
