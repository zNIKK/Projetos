require("dotenv").config();
PORT = process.env.PORT;
HOST = process.env.HOST;
MONGO_URL = process.env.MONGO_URL;

const express = require("express");
const app = express();
<<<<<<< HEAD
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

=======
const mongoose = require("mongoose")
const path = require("path")
const userRouter = require("./routes/userRoutes")

mongoose.connect(MONGO_URL, (err)=> {
    if (err) {
        console.log(err);
    } else {
        console.log("Mongo server Connected");
    }
})
>>>>>>> f8e3cc877865f69c8c4236c7266b88b138fad651

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

app.use("/", userRouter);

app.listen(PORT, HOST, ()=>{
    console.log(`Server connected on ${HOST}:${PORT}`);
})