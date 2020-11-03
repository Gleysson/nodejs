
const { body } = require('express-validator');

module.exports = function(app){

    const router = app.locals.version.v1;
    const controller = app.src.controllers.v1.User

    router.post('/auth', [

        body('email')
            .exists()
            .withMessage('Campo email é obrigatório')
            .isEmail()
            .withMessage('Campo email deve ser válido'),

        body('password')
            .exists()
            .withMessage('Campo senha é obrigatório')
            .isString()
            .withMessage('O campo senha deve ser do tipo texto')
            .isLength({ min: 8 })
            .withMessage('O campo senha deve ter no mínimo 8 caracteres')

    ], controller.authenticate.index)

}
