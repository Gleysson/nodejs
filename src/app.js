const express = require('express')
const consign = require('consign')

const app = express()

consign()
  .include('./src/controllers')
  .then('./src/routers')
  .into(app);

module.exports = app;