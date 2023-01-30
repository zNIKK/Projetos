const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser')
const posts = require('../model/posts.js')


routes.get("/:title", (req, res, next)=>{
    let title = req.params.title;
    let titlePost = posts.getURL(title);
    if (titlePost) {
        let url = titlePost.url;
        res.redirect(url);
    } else {
        next();
    }

    // youtube.com/nicolas
})

routes.get("/get", (req, res)=> {
    res.send(JSON.stringify(posts.getAll()))
})

routes.post("/new/post", bodyParser.json(),(req, res)=>{
    let title = req.body.title;
    let description = req.body.description;
    let url = req.body.url;


    posts.PostUrl(title, description, url);
    res.send("url adcionada!");
})


module.exports = routes;