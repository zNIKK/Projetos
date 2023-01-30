const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const userController = require("../controllers/userController");
const bodyParser = require("body-parser")

router.get("/", (req, res) => { res.render("main") })

router.get("/login",  (req, res)=> { res.render("login", {error : false, body: {}}) });
router.get("/register", (req, res) => { res.render("register", {error : false, body: {}}) });

router.post("/login", express.json(), bodyParser.urlencoded({ extended: false }), userController.login);
router.post("/register", bodyParser.urlencoded({ extended: false }), userController.register);
=======
const userController = require("../controller/userController.js")
router.get("/", (req, res) => { res.render("main") })

router.get("/login", (req, res) => { userController.login })
router.get("/register", (req, res) => { usercontroller.register })
>>>>>>> f8e3cc877865f69c8c4236c7266b88b138fad651


module.exports = router
