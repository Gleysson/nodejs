const dotenv = require ('dotenv-safe')
dotenv.config()

module.exports = function (app) {
    
    this.index = {
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "a8fc4c206ed30c",
          pass: "6b349b31fe6a02"
        }
    }

    return this;
}