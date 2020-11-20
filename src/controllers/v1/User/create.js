
const db = require('../../../models')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator');



module.exports = function(app){


    this.index = async (req, res, next) => {

        try {

        const salt = 5;
        const hash = await bcrypt.hash(req.body.password, salt)
       

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const user = await db.User.create({
            name: req.body.name,
            email: req.body.email,
            senha: hash,
        });

        return res.status(200).send({
            data: user,
            msg: 'O usuario foi cadastrado com sucesso'
        })

        } catch (error) {
            console.log(error)
           return  res.status(500).send({
                data: error,
                msg: 'Falha ao cadastrar usuário',
            })     
        }
    }

    return this

}