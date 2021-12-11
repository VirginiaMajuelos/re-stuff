const router = require("express").Router();
const { populate } = require("../models/Product.model");
const Product = require("../models/Product.model");

router.get("/", (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.status(500).json({ err, errMessage: "Error looking for all products" }))
      })
      
router.get("/owner/:id", (req, res) => {
    Product.find({owner: req.params.id})
        .then(allProducts => res.json(allProducts))
        .catch(err => res.status(500).json({ err, errMessage: "Error looking for user products" }))
      })

router.get("/details-product/:id", (req, res) => {
  const { id } = req.params;
  
  Product.findById(id)
  .populate("owner")
  .then((theProduct) => res.json(theProduct))
  .catch((err) =>
  res.status(500).json({ err, errMessage: "Error looking for details of product" })
  );
});

router.get("/:name/:city", (req, res) => {
  const { name, city } = req.params;

  Product.find(name, city)
    .then((theProduct) => res.json(theProduct))
    .catch((err) =>
      res.status(500).json({ err, errMessage: "Error looking for name & city of products" })
    );
});

router.post("/create-new-product", (req, res) => {
  const { name, description, imageUrl, price, categorie, cityProduct, postCode } = req.body;
  
  Product.create({ owner, name, description, imageUrl, price, categorie, cityProduct, postCode })
  .then((newProduct) => res.json(newProduct))
  .catch((err) => res.status(500).json({ err, errMessage: "Error creating a new product" }));
});

router.put("/edit-product/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, imageUrl, price, categorie, cityProduct, postCode, status } = req.body;
  
  Product.findByIdAndUpdate( id, { name, description, imageUrl, price, categorie, cityProduct, postCode, status }, { new: true })
    .populate('owner')
    .then((updatedProducts) => res.json(updatedProducts))
    .catch((err) => res.status(500).json({ err, errMessage: "Error editing product" }));
  });
  
  router.delete("/delete-product/:id", (req, res) => {
    const { id } = req.params;
    
    Product.findByIdAndDelete(id)
    .then((deletedProduct) => res.json({ deletedProduct }))
    .catch((err) => res.status(500).json({ err, errMessage: "Error to delete product" }));
  });
  
  module.exports = router;