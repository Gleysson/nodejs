const db = require('../../../models')

module.exports = function(app){

    this.index = (req, res) => {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then((rows) => {
           return res.sendStatus(200)

        }).catch((err) => {
           return res.status(500).send(err)
        });
    }

    return this

}