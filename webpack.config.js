const path = require("path");

module.exports = {
  entry: "./dist/index.js",
  target: "node",
  mode: "production",
  output: {
    filename: "mahjong-helper-cli.min.js",
    path: path.resolve(__dirname, "min")
  }
};
