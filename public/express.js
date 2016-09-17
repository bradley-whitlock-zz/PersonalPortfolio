'use strict'
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.enable('trust proxy')

app.set('port', 3001)
// app.use(bodyParser.urlencoded)
app.use(bodyParser.json())
app.use(express.static('public'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/mail', (req, res) => {
  console.log(req.body)
  res.send({
    status: 'okay'
  })
})

app.listen(app.get('port'), () => {
  console.log(`listening on port ${app.get('port')}`)
})