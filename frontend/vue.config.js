const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // URL do back-end
        changeOrigin: true,
        pathRewrite: { '^/api': '' }, // Remove o prefixo /api ao enviar para o back-end
      },
    },
  },
};
