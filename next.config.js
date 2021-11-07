module.exports = {
  reactStrictMode: true,
}


const { join, resolve } = require("path");


const paths = {
  src: join(__dirname, "src"),
  static: join(__dirname, "static"),
  reduxFlow: join(__dirname, "src", "redux-flow"),
};
const alias = {
  static: paths.static,
  pages: join(paths.src, "pages"),
  services: join(paths.src,"services"),
  components: join(paths.src, "components"),
  scss: join(paths.src, "scss"),

};


