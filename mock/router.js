var express = require('express')
var router = express.Router()
var config = require('./config.js')
var homehot = require('./data/home/homehot')
var searchData = require('./data/search')
var detailsData = require('./data/details')
var commentData = require('./data/comment')
var url = require('url')

router.get(config.homehot1, function(req, res) {
	// 传递参数
	var cityName = url.parse(req.url, true).query.city
	console.log(cityName)
	res.send(homehot.hot1)
})
router.get(config.homehot2, function(req, res) {
	// 传递参数
	var cityName = url.parse(req.url, true).query.city
		// console.log(cityName)
	res.send(homehot.hot2)
})
router.get(config.search, function(req, res) {
	// 传递参数
	var cityName = url.parse(req.url, true).query.city
	var content = url.parse(req.url, true).query.content
	var page = url.parse(req.url, true).query.page
	console.log("城市：" + cityName, "搜索内容：" + content + "页码" + page);
	res.send(searchData)
})
router.get(config.details, function(req, res) {
	// 传递参数
	var id = url.parse(req.url, true).query.id
	console.log(id)
	res.send(detailsData)
})
router.get(config.comment, function(req, res) {
	// 传递参数
	var id = url.parse(req.url, true).query.id
	console.log(id)
	res.send(commentData)
})

module.exports = router