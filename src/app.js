const express = require('express')
const consign = require('consign')
const morgan = require('morgan')

const app = express()

app.locals.version = {
  v1: express.Router().use(morgan('dev')),
  v2: express.Router().use(morgan('dev'))
}

app.use('/api/v1', app.locals.version.v1 )
app.use('/api/v2', app.locals.version.v2 )

consign()
  .include('./src/controllers')
  .include('./src/middlewares')
  .then('./src/routers')
  .into(app);

module.exports = app;