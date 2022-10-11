const path = require("path");

module.exports = {
  filename: "web/[name].js",
  path: path.join(__dirname, "../", "build"),
  publicPath: "auto",
  clean: true,
};
