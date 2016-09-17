'use strict'
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.enable('trust proxy')
console.log(process.env)
app.set('port', process.env.PORT || 3001)
// app.use(bodyParser.urlencoded)
app.use(bodyParser.json())
app.use(express.static('public'));

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.post('/mail', function(req, res) {
  console.log(req.body)
  res.send({
    status: 'okay'
  })
})

app.listen(app.get('port'), function () {
  console.log("listening on port" + app.get('port'))
})