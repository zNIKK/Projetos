const express = require('express');
const router = express.Router();
const userController = require("../controller/userController.js")
router.get("/", (req, res) => { res.render("main") })

router.get("/login", (req, res) => { userController.login })
router.get("/register", (req, res) => { usercontroller.register })


module.exports = router
