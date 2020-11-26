const db = require('../../../models')
const { validationResult } = require('express-validator')

module.exports = function(app){

    this.index = async (req, res) => {

        const MailLib = app.src.libs.Mail.index

        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // -> regras de negocio

        // -> envio de email
        MailLib.sendMail({
            from: 'App Mail <contato@mail.com>',
            to: ` <${req.body.name}> <${req.body.email}>`,
            subject: "Envio de Email Node",
            html: "<p> Você recebeu um email </p>"
        })
       
        return res.send({
            msg: "Success",
        });
    }

    return this

}