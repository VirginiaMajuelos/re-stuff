const router = require("express").Router();
const Product = require("../models/Product.model");

/// Buscando productos -all products-////
router.get("/", (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({ err, errMessage: "Error looking for all products" }))
      })
      
/// Busca todos los productos por id owner

router.get("/owner/:id", (req, res) => {
    Product.find({owner: req.params.id})
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({ err, errMessage: "Error looking for all products" }))
      })

/// Buscando un producto ////

router.get("/details-product/:id", (req, res) => {
  const { id } = req.params;
  
  Product.findById(id)
  .then((theProduct) => res.json(theProduct))
  .catch((err) =>
  res.json({ err, errMessage: "Error looking for datails of product" })
  );
});

/// Buscando productos por name y city ///

router.get("/:name/:city", (req, res) => {
  const { name, city } = req.params;

  Product.find(name, city)
    .then((theProduct) => res.json(theProduct))
    .catch((err) =>
      res.json({ err, errMessage: "Error looking for kind of products" })
    );
});

/// Crear nuevo producto

router.post("/create-new-product", (req, res) => {
  const { name, description, imageUrl, price, categorie, cityProduct, postCode, owner } = req.body;
  
  Product.create({
    owner,
    name,
    description,
    imageUrl,
    price,
    categorie,
    cityProduct,
    postCode,
  })
  .then((newProduct) => res.json(newProduct))
  .catch((err) => res.status(500).json({ err, errMessage: "error creating a new product" }));
});


//// Editar producto:

router.put("/edit-product/:id", (req, res) => {
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
  
  router.delete("/delete-product/:id", (req, res) => {
    const { id } = req.params;
    
    Product.findByIdAndDelete(id)
    .then((deletedProduct) => res.json({ deletedProduct }))
    .catch((err) => res.json({ err, errMessage: "Error to delete product" }));
  });
  
  
  module.exports = router;