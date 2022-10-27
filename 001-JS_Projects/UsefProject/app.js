const express = require("express");
const app = express();
const path = require("path")
const userRouter = require("./routes/userRoutes")

require("dotenv").config();
PORT = process.env.PORT;
HOST = process.env.HOST;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

app.use("/", userRouter);

app.listen(PORT, HOST, ()=>{
    console.log(`Server connected on ${HOST}:${PORT}`);
})