const router = require("express").Router();
const Request = require("../models/Request.model");
const Product = require("../models/Product.model")

const { populate } = require("../models/Product.model", "../models/User.model");

router.get("/all-requests", (req, res) => {
   Request.find()
         .populate("requestOwner idProduct")
         .then(request => res.json(request))
         .catch((err) => res.status(500).json({ err, errMessage: "Error looking for request" }))
})

router.post("/create-request", (req, res) => {
  const { inicialDate, finalDate, comments, requestOwner, isAccept, idProduct } = req.body;
  const query = {};

  inicialDate && (query.inicialDate = inicialDate)
  finalDate && (query.finalDate = finalDate)
  comments && (query.comments = comments)
  requestOwner && (query.requestOwner = requestOwner)
  isAccept && (query.isAccept = isAccept)
  idProduct && (query.idProduct = idProduct)

  Request.create(query)
    .then((newRequest) => res.json(newRequest))
    .catch((err) => res.status(500).json({ err, errMessage: "Error creating a request" }));
});

router.put("/edit-request-status/:id", (req, res) => {
  const { id } = req.params;
  const { isAccept, idProduct} = req.body;

  Request.findByIdAndUpdate(id, {isAccept, idProduct}, { new: true })
    .then((updatedRequest) => {
      return Product.findByIdAndUpdate(idProduct, {status: 'RENTED'}, { new: true } )
  })
  .then(response => res.status(200).json(response))
  .catch((err) => res.status(500).jsonres.json({ err, errMessage: "Error accepting request" }));
    
});

router.delete("/request/:id", (req, res) => {
    const { id } = req.params;
    
    Product.findByIdAndDelete(id)
    .then((deletedProduct) => res.json({ deletedProduct }))
    .catch((err) => res.status(500).json({ err, errMessage: "Error to delete request" }));
  });
  
module.exports = router

