const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target:  process.env.REACT_APP_REST_SOURCE_URL,
      changeOrigin: true,
      logLevel: 'debug',
      pathRewrite: {
        '^/api/': '/', // remove base path
      },
    })
  );
};

