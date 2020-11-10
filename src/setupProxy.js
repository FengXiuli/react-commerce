const {
	createProxyMiddleware
} = require('http-proxy-middleware');

module.exports = function(app) {
	app.use(
		'/api', //代替跨域的地址
		createProxyMiddleware({
			target: 'http://localhost:3002', // 后端的地址
			changeOrigin: true,
		})
	);
};