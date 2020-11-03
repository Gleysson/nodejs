const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')

module.exports = function(app){


    this.index = function(req, res, next){

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

    }


    return this;
}