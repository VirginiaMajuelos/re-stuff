const router = require("express").Router();
const Product = require("../models/Product.model");

/// Buscando productos -all products-////
router.get("/products", (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({ err, errMessage: "Error looking for all products" }))
})

/// Buscando productos por name y city ///

router.get("/products/:name/:city", (req, res) => {
  const { name, city } = req.params;

  Product.find(name, city)
    .then((theProduct) => res.json(theProduct))
    .catch((err) =>
      res.json({ err, errMessage: "Error looking for kind of products" })
    );
});

/// Buscando un producto ////

router.get("/products/details-product/:id", (req, res) => {
  const { id } = req.params;

  Product.findById(id)
    .then((theProduct) => res.json(theProduct))
    .catch((err) =>
      res.json({ err, errMessage: "Error looking for datails of product" })
    );
});

/// Crear nuevo producto

router.post("/products/create-new-product", (req, res) => {
  const { name, description, imageUrl, price, categorie, cityProduct, postCode } = req.body;

  Product.create({
    name,
    description,
    imageUrl,
    price,
    categorie,
    cityProduct,
    postCode,
  })
    .then((newProduct) => res.json(newProduct))
    .catch((err) => res.json({ err, errMessage: "error creating a new product" }));
});


//// Editar producto:

router.put("/products/edit-product/:id", (req, res) => {
  const { id } = req.params;
  const {
    name,
    description,
    imageUrl,
    price,
    categorie,
    cityProduct,
    postCode,
    status,
  } = req.body;

  Product.findByIdAndUpdate(
    id,
    {
      name,
      description,
      imageUrl,
      price,
      categorie,
      cityProduct,
      postCode,
      status,
    },
    { new: true }
  )
    .then((updatedProducts) => res.json(updatedProducts))
    .catch((err) => res.json({ err, errMessage: "Error editing product" }));
});

//// Delete products:

router.delete("products/delete-product/:id", (req, res) => {
  const { id } = req.params;

  Products.findByIdAndDelete(id)
    .then((deletedProduct) => res.json({ deletedProduct }))
    .catch((err) => res.json({ err, errMessage: "Error to delete product" }));
});


module.exports = router;