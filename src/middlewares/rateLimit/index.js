const rateLimit = require('express-rate-limit')

module.exports = function(app){

    const v1 = app.locals.version.v1;

    v1.use(rateLimit({
        windowMs: 2 * 60 * 1000,
        max: 5,
        message: "Muitos acessos realizados a partir deste IP, tente novamente após 5 minutos" 
    }))

    return this;
}