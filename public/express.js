'use strict'
var express = require('express')
var bodyParser = require('body-parser')
var nodemailer = require('nodemailer')
var credentials = require('../../credential.json')

var app = express()

app.enable('trust proxy')

app.set('port', process.env.PORT || 3000)

app.use(bodyParser.json())

app.use(express.static('public'));

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

// Create reusable object


app.post('/mail', function(req, res) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: credentials.user,
      pass: credentials.pass
    }
  });
  var mailOptions = {
    from: req.body.email,
    to: 'bradwhitlock6@gmail.com',
    subject: '[bradleywhitlock.com] Mail from ' + req.body.name,
    text: req.body.message
  }

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log('ERROR: ', error)
      res.json({
        status: false,
      })
    }
    console.log('Message Sent: ', info.response)
    res.json({
      status: true
    })
  })


})

app.listen(app.get('port'), function () {
  console.log("listening on port " + app.get('port'))
})