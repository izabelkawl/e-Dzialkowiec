import { startHTTPServer } from "./components/serverHTTP.js";
import { connectWithDatabase } from "./components/database.js";

const startApp = async () => {
  await connectWithDatabase();
  startHTTPServer();
};

startApp();
