const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt')
const db = require('../../../models')
const jwt = require('jsonwebtoken')

module.exports = function(app){

    const secretKey = app.src.config.server.SECRET_KEY

    this.index = async function(req, res, next){


        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            
        const user = await db.User.findOne({
            where: {
                email: req.body.email
            }
        })

        if(!user){
            return res.status(404).send({
                msg: "Usuário não encontrado"
            })
        }

        const payload = {
            id: user.id
        }

        if(!await bcrypt.compare(req.body.password, user.senha)){
            return res.status(401).send({
                msg: "Usuário não autorizado"
            })
        }

        const token = jwt.sign(payload, secretKey, {
            expiresIn: '3m' 
        })
        

        return res.send({
            token
        })

    } catch (error) {
            return res.send('error')
    }

    }


    return this;
}