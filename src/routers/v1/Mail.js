
const { body, param, query } = require('express-validator');

module.exports = function(app){

    const router = app.locals.version.v1;
    const controller = app.src.controllers.v1.Mail


    router.post('/mail', [
        body('email')
        .exists()
        .withMessage('O campo de email é obrigatório')
        .isEmail()
        .withMessage('O campo deve ser um email válido'),

        body('name')
        .exists()
        .withMessage('O campo name é obrigatório')
    ] , controller.send.index)

}
