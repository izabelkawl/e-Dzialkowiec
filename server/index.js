const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

const userRouter = require('./routes/user-router.js');
const handymanRouter = require('./routes/handyman-router.js');
const allotmentRouter = require('./routes/allotment-router.js');
const messageRouter = require('./routes/message-router.js');

const app = express();

// Bodyparser 
app.use(express.urlencoded({ extended: true }));//(bodyparser.ulr...false?
app.use(cors());
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
    .connect(
        db,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Routes
app.use('/api', userRouter);
app.use('/api', allotmentRouter);
app.use('/api', handymanRouter);
app.use('/api', messageRouter);

const apiPort = 3000;

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))