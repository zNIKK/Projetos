const Joi = require('joi');
date = new Date()
const registerValidate = Joi.object({
    email : Joi.string()
        .email({minDomainSegments: 2, tlds: ["com", "net", "org"]})
        .min(3)
        .max(50)
        .required,

    name : Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .pattern(new RegExp("/[^!@#\$%\^\&*\)\(+=.-]+$/g"))
        .required,
        
    password : Joi.string()
        .pattern(new RegExp("/^[a-zA-Z0-9]{3,30}$/[^!@#\$%\^\&*\)\(+=.-]+$/g")),

    bday : Joi.number()
        .integer()
        .min(1900)
        .max(date.getFullYear()),
})

const loginValidate = Joi.object({
    name : Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .pattern(new RegExp("/[^!@#\$%\^\&*\)\(+=.-]+$/g"))
        .required,
    
    password : Joi.string()
        .pattern(new RegExp("/^[a-zA-Z0-9]{3,30}$/[^!@#\$%\^\&*\)\(+=.-]+$/g")),

})

module.exports.registerValidate = registerValidate;
module.exports.loginValidate = loginValidate;