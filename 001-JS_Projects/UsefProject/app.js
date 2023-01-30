const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const userRouter = require("./routes/userRoutes");

require("dotenv").config();

PORT = process.env.PORT;
HOST = process.env.HOST;
MONGO_URL = process.env.MONGO_URL;
mongoose.connect(process.env.MONGO_URL, (err)=> {
    if (err) {
        console.log(err);
    } else {
        console.log("Server mongo connected")
    }
})


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

app.use("/", userRouter);

app.listen(PORT, HOST, ()=>{
    console.log(`Server connected on ${HOST}:${PORT}`);
})