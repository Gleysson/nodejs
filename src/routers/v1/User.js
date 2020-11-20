
const { body, param, query } = require('express-validator');

module.exports = function(app){

    const router = app.locals.version.v1;
    const controller = app.src.controllers.v1.User
    const mdw = app.src.middlewares


    router.post('/auth', [
        body('email')
        .exists()
        .withMessage('O campo de email é obrigatório')
        .isEmail()
        .withMessage('O campo deve ser um email válido'),
        body('password').exists()
    ] , controller.authenticate.index)

    router.post('/user', [
        body('email')
            .exists()
            .withMessage('Email é obrigatório')
            .isEmail()
            .withMessage("Email inválido"),
        body('name').exists().withMessage('Name é obrigatório'),
        body('password').exists().withMessage('Password é obrigatório'),

    ], controller.create.index);


    router.get('/user', mdw.auth.index , controller.getAll.index)

    router.get('/user/:id', [
        param('id').exists().withMessage('O parametro id deve ser obrigatório')
    ] , controller.getOne.index)

        
    router.put('/user/:id', [
        param('id').exists().withMessage('O parametro id deve ser obrigatório')
    ] , controller.update.index)

    router.delete('/user/:id', [
        param('id').exists().withMessage('O parametro id deve ser obrigatório')
    ] , controller.remove.index)

}
