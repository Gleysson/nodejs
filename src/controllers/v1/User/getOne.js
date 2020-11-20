const db = require('../../../models')

module.exports = function(app){

    this.index = (req, res) => {

        db.User.findByPk(req.params.id, {
            attributes: ['id', 'name', 'email', 'createdAt', 'updatedAt']
        }).then((rows) => {
           return res.status(200).send(rows)
        }).catch((err) => {
           return res.status(500).send(err)
        });

    }

    return this

}