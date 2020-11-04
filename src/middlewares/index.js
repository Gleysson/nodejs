const helmet = require('helmet')
const express = require('express')
const compression = require('compression')
const morgan = require('morgan')

module.exports = function(app){
    const v1 = app.locals.version.v1;

    v1.use(helmet())
    v1.use(compression())
    v1.use(express.json())
    v1.use(express.urlencoded({ extended: false }))
    v1.use(morgan('dev'))

    return this
}