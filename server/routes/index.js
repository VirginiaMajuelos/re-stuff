module.exports = app => {
  app.use("/", require("./auth.routes"));
  app.use("/products", require("./products.routes"));
}