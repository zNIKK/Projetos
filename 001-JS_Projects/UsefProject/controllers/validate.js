const Joi = require('joi');

const registerValidate = (data)=>{
    const schema = Joi.object({
        email: Joi.string()
            .required()
            .email({ maxDomainSegments: 2, tlds: {allow: ['com', 'net', 'org']}}),
            
        name: Joi.string()
            .alphanum()
            .required()
            .min(3)
            .max(30),

        password: Joi.string()
            .required()
            .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')),

        bday: Joi.string()
            .min(1)
            .max(10)
            .default(Date.now()),

    })
            .with('name', 'bday')

            return schema.validate(data);
            
}   

const loginValidate = (data)=>{
    const schema = Joi.object({
        name: Joi.string()
            .alphanum()
            .required()
            .min(3)
            .max(30),

        password: Joi.string()
            .required()
            .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')),
    })
        return schema.validate(data)

}
module.exports.registerValidate = registerValidate;
module.exports.loginValidate = loginValidate;

