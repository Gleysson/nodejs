const db = require('../../../models')

module.exports = function(app){

    this.index = async (req, res) => {

        const options = {
            attributes: ['id', 'name', 'email'],
            page: req.query.page || 1, // Default 1
            paginate: 2, // Default 25
            order: [['name', 'DESC']],
          }

          const data = await db.User.paginate(options)

          return res.send(data)

    }

    return this

}