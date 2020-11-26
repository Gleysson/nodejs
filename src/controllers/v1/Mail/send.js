const db = require('../../../models')
const { validationResult } = require('express-validator')

module.exports = function(app){

    this.index = async (req, res) => {

        const MailQueue = app.src.queues.MailQueue.index;
        
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // -> regras de negocio

        MailQueue.add({
            name: req.body.name,
            email: req.body.email,
        }, {
            attempts: 5,
            delay: 5000,
            priority: 1,
            backoff: 2000 
        })

        return res.send({
            msg: "Sucesso",
        });
    }

    return this

}