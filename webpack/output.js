const path = require("path");

module.exports = {
  filename: "web/[name].js",
  path: path.resolve(__dirname, "../build"),
  publicPath: "auto",
  clean: true,
};
