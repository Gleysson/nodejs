const helmet = require('helmet')
const express = require('express')
const compression = require('compression')

module.exports = function(app){

    app.use(helmet())
    app.use(compression())
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    return this
}