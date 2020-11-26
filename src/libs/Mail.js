const nodemailer = require("nodemailer")

module.exports = function(app){

   const configMail =  app.src.config.mail.index
   this.index = nodemailer.createTransport(configMail)

   return this;

}