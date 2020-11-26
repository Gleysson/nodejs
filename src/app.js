const express = require('express')
const consign = require('consign')

const app = express()

app.locals.version = {
  v1: express.Router(),
  v2: express.Router()
}

app.use('/api/v1', app.locals.version.v1 )
app.use('/api/v2', app.locals.version.v2 )

consign()
  .include('./src/config')
  .then('./src/libs')
  .then('./src/jobs')
  .then('./src/queues')
  .then('./src/controllers')
  .then('./src/middlewares')
  .then('./src/routers')
  .into(app);

module.exports = app;