const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
const bodyParser = require("body-parser")

router.get("/", (req, res) => { res.render("main") })

router.get("/login",  (req, res)=> { res.render("login", {error : false, body: {}}) });
router.get("/register", (req, res) => { res.render("register", {error : false, body: {}}) });

router.post("/login", express.json(), bodyParser.urlencoded({ extended: false }), userController.login);
router.post("/register", bodyParser.urlencoded({ extended: false }), userController.register);


module.exports = router
