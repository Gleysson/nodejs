const router = require('express').Router();

module.exports = function(app){

    router.get('/api/v1/profile', app.src.controllers.v1.Profile.find)
    
    app.use(router)

    return this
}
