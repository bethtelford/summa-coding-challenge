module.exports = {
  devServer: {
    proxy: {
      "/auth": {
        target: "http://localhost:4000",
        secure: false
      },
      "/api": {
        target: "http://localhost:4000",
        secure: false
      }
    }
  }
};