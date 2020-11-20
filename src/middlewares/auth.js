const jwt = require('jsonwebtoken');

module.exports = function(app){
    
    this.index = async (req, res, next) => {

        try {
            
            const secretKey = app.src.config.server.SECRET_KEY
            const token = req.headers.authorization;

            const data = token.split(' ');
            await jwt.verify(data[1], secretKey) 

            next();

        } catch (error) {
            return res.status(401).send('Not Authorized');
        }
    

    }


    return this
}