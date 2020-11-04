const dotenv = require('dotenv-safe');
dotenv.config();

module.exports = function(app){

    this.PORT = process.env.PORT || 3000
    this.SECRET_KEY = process.env.SECRET_KEY || '123456'

    return this

}