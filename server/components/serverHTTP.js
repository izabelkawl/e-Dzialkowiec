import express from "express";
import keys from "../config/keys.js";
import bodyParser from "body-parser";
import cors from "cors";
import logger from "./logger.js";
import { ServerRuntimeError } from "../errors/server.js";
import morgan from "morgan";

// routes
import userRouter from "../routes/user-router.js";
import allotmentRouter from "../routes/allotment-router.js";
import messageRouter from "../routes/message-router.js";
import noticeboardRouter from "../routes/noticeboard-router.js";
import imageRouter from "../routes/category-router.js";
import forumRouter from "../routes/forum-router.js";
import commentRouter from "../routes/comment-router.js";
import financeRouter from "../routes/finance-router.js";
import paymentdetailRouter from "../routes/paymentdetail-router.js";
import managementRouter from "../routes/management-router.js";
import announcementRouter from "../routes/announcement-router.js";

const app = express();

// Middlewares definition
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })); //(bodyparser.ulr...false?
app.use(bodyParser.json());
app.use(logger);
app.use(cors());

// Routing definition
app.use("/api", userRouter);
app.use("/api", allotmentRouter);
app.use("/api", messageRouter);
app.use("/api", noticeboardRouter);
app.use('/api', imageRouter);
app.use('/api', forumRouter);
app.use('/api', commentRouter);
app.use('/api', financeRouter);
app.use('/api', paymentdetailRouter);
app.use('/api', managementRouter);
app.use('/api', announcementRouter);

export const startHTTPServer = async () =>
  app.listen(keys.httpPort, (error) => {
    if (error) throw new ServerRuntimeError(error.message);
    else console.log(`Server started on ${keys.httpPort}`.blue);
  });
