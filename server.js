const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
// router
const userRouter = require("./Routers/signupRouter");
app.use("/api/users", userRouter);
// mongoose connection
mongoose
.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MogoDB connected successfully");
})
.catch((err) => {
    console.log("MogoDB connection failed", err);
});

app.listen(5000,() => {
    console.log("Server is running on port 5000");
});