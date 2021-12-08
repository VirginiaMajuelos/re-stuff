const router = require("express").Router();
const Request = require("../models/Request.model");

router.post("/create-request", (req, res) => {
  const { inicialDate, finalDate, comments, requestOwner, isAccept, idProduct } = req.body;

  Request.create({ inicialDate, finalDate, comments, requestOwner, isAccept, idProduct})
    .then((newRequest) => res.json(newRequest))
    .catch((err) => res.status(500).json({ err, errMessage: "error creating a request" }));
});

module.exports = router