const target = process.env.DEV_SERVER_PROXY_TARGET;

const devServer = {
  proxy: {
    '/socket.io': {
      target,
      ws: true,
      changeOrigin: true,
    },
    '/api/v1/*': {
      target,
      pathRewrite: { '^/api/v1': '' },
      changeOrigin: true,
    },
  },
};

module.exports = {
  devServer,
};
