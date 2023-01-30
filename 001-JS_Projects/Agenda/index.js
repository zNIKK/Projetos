const { middlewares, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware')
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes/routes");
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_CONNECT_URL)
    .then(()=> {
        console.log('Mongo database connected');
        app.emit('Está pronto')
    }).catch(err => {
        console.log(err);
    })

// cookies 
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');


// app.use => para usar o caminho /aluno como principal para usar as todas as funções das rotas

// todas as requisições feitas nessa rota "/aluno" irão usar esses middleware

const sessionOptions = session({
    secret: 'dqwgwqrwqhgqweqwe301293  d wqdqweqweqw',
    store: MongoStore.create({ mongoUrl: process.env.MONGO_CONNECT_URL }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    }

});


app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use("/",
    helmet(),
    sessionOptions,
    flash(),
    bodyParser.urlencoded({ extended: true }),
    middlewares,
    csrf(),
    checkCsrfError,
    csrfMiddleware,
    routes,
);




const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`);
})