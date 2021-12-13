module.exports = app => {
  app.use("/", require("./auth.routes"));
  app.use("/products", require("./products.routes"));
  app.use("/requests", require("./request.routes"));
  app.use("/upload", require("./uploads.routes"));
  app.use("/reviews", require ("./review.routes"));
}