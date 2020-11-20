const db = require('../../../models')

module.exports = function(app){

    this.index = (req, res) => {

        db.User.update(req.body,{
            where: {
                id: req.params.id
            }
        }).then((rows) => {
           return res.status(200).send(rows)
        }).catch((err) => {
           return res.status(500).send(err)
        });

    }

    return this

}