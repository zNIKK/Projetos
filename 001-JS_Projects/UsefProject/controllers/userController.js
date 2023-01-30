
const User = require("../models/userScheme")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { loginValidate, registerValidate} = require("./validate")

const userController = {
    register : async (req, res) => {
        console.log(req.body);
        const { error } = registerValidate(req.body);

        const selectedEmail = await User.findOne({email: req.body.email});
        const selectedName = await User.findOne({name: req.body.name});

        if (error) {
            return res.status(404).send(error.message);
        }

        if (selectedEmail && selectedName) res.status(400).send("Email or Username already exist");

        const user = new User({
            email : req.body.email,
            name : req.body.name,
            password : bcrypt.hashSync(req.body.password, 10),
            bday : req.body.bday
        });

        try {   
            const savedUser = await user.save();
            res.send(savedUser);
        } catch(error) {
            res.render(400).render("badRequest")
        }

    },

    login : async (req, res) =>{
        console.log(req.body);

        const { error } = loginValidate(req.body);

        if (error) return res.status(404).send("Not Found");

        const selectedName = await User.findOne({name: req.body.name});

        if (!selectedName) return res.status(400).send("Username or password incorrect");
        const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedName.password)
        if (!passwordAndUserMatch) return res.status(400).send('Username or password incorrect');

        const token = jwt.sign({_id: selectedName._id}, process.env.TOKEN_SECRET)
        console.log(token);
        res.header("authorization-token", token)
        res.send("user logged")
    }
}
module.exports = userController
