const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.APP_ENV === "development" ? "/" : "/2024/project2/t1",
  transpileDependencies: true,
});
