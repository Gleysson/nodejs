const router = require('express').Router();

module.exports = function(app){

    router.get('/api/v1/user', app.src.controllers.v1.User.find)

    app.use(router)

    return this
}
