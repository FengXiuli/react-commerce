var express = require('express')
var router = express.Router()
var config = require('./config.js')
	// var url = require('url')
var homehot = require('./data/home/homehot')

router.get(config.homehot1, function(req, res) {
	res.send(homehot.hot1)
})
router.get(config.homehot2, function(req, res) {
	res.send(homehot.hot2)
})

module.exports = router