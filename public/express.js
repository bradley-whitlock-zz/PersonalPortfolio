'use strict'
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.enable('trust proxy')

app.set('port', process.env.PORT || 3000)
// app.use(bodyParser.urlencoded)
app.use(bodyParser.json())
app.use(express.static('public'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(app.get('port'), () => {
  console.log(`listening on port ${app.get('port')}`)
})