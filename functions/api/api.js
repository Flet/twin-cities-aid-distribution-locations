const path = require('path')
process.env['NODE_CONFIG_DIR'] = path.join(__dirname, 'config/')

const app = require('./src/app')
const express = require('@feathersjs/express')

const mainApp = express().use('/.netlify/functions/api', app);

app.setup()

const serverless = require('serverless-http')
module.exports.handler = serverless(mainApp)
