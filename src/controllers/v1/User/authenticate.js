const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')

module.exports = function(app){

    const secretKey = app.src.config.server.SECRET_KEY

    this.index = function(req, res, next){

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const payload = {
            id: 1,
            name: 'Gleysson Rocha',
        }

        const token = jwt.sign(payload, secretKey, {
            expiresIn: '3m' 
        })
        
        const verify = jwt.verify(token, secretKey, function(err, decoded){
            return res.send({
                err, decoded
            })
        })

        return res.send({
            token,
            verify
        })

    }


    return this;
}