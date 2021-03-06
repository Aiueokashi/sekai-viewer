const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/file/sekai-assets",
    createProxyMiddleware({
      target: "https://sekai-res.dnaroma.eu/",
      changeOrigin: true,
    })
  );
  app.use(
    "/minio/",
    createProxyMiddleware({
      target: "https://minio.dnaroma.eu",
      changeOrigin: true,
      pathRewrite: {
        "^/minio/": "/",
      },
    })
  );
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.sekai.best",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/",
      },
    })
  );
  app.use(
    "/strapi",
    createProxyMiddleware({
      target: "https://strapi.sekai.best",
      changeOrigin: true,
      pathRewrite: {
        "^/strapi": "/",
      },
    })
  );
};
