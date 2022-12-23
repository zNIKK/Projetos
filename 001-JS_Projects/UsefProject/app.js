require("dotenv").config();
PORT = process.env.PORT;
HOST = process.env.HOST;
MONGO_URL = process.env.MONGO_URL;

const express = require("express");
const app = express();
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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

app.use("/", userRouter);

app.listen(PORT, HOST, ()=>{
    console.log(`Server connected on ${HOST}:${PORT}`);
})